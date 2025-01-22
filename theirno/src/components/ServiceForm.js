import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const ServiceForm = () => {
    const { title } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [distance, setDistance] = useState(0);
    const [totalCharges, setTotalCharges] = useState(0);
    const [bookingData, setBookingData] = useState({
        fullName: "",
        email: "",
        phone: "",
    });
    const [selectedLocation, setSelectedLocation] = useState(null);

    const mapRef = useRef(null);
    const autocompleteRef = useRef(null);
    const markerRef = useRef(null);

    const FIXED_LOCATION = { lat: 37.7749, lng: -122.4194 }; // Replace with your fixed location (San Francisco)

    useEffect(() => {
        fetch(`https://api.carreportpro.com/api/services/title/${title}`)
            .then((response) => response.json())
            .then((data) => {
                setService(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching service:", error);
                setLoading(false);
            });
    }, [title]);

    useEffect(() => {
        const initializeMap = () => {
            if (window.google && mapRef.current) {
                const map = new window.google.maps.Map(mapRef.current, {
                    center: FIXED_LOCATION,
                    zoom: 8,
                });

                const marker = new window.google.maps.Marker({
                    position: FIXED_LOCATION,
                    map,
                    draggable: true,
                });

                const autocompleteInput = document.getElementById("autocomplete");
                const autocomplete = new window.google.maps.places.Autocomplete(autocompleteInput);

                autocomplete.bindTo("bounds", map);
                map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(autocompleteInput);

                autocomplete.addListener("place_changed", () => {
                    const place = autocomplete.getPlace();
                    if (place.geometry) {
                        map.setCenter(place.geometry.location);
                        marker.setPosition(place.geometry.location);
                        setSelectedLocation({
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng(),
                        });
                        calculateDistance(place.geometry.location);
                    }
                });

                marker.addListener("dragend", () => {
                    const position = marker.getPosition();
                    setSelectedLocation({ lat: position.lat(), lng: position.lng() });
                    calculateDistance(position);
                });

                markerRef.current = marker;
            } else {
                console.warn("Google Maps API not loaded yet. Retrying...");
                setTimeout(initializeMap, 500); // Retry after 500ms
            }
        };

        initializeMap();
    }, [mapRef.current]);

    const calculateDistance = (destination) => {
        if (!destination || !service) return;

        // Convert FIXED_LOCATION and destination to LatLng objects
        const originLatLng = new window.google.maps.LatLng(FIXED_LOCATION.lat, FIXED_LOCATION.lng);
        const destinationLatLng = new window.google.maps.LatLng(destination.lat(), destination.lng());

        // Calculate the distance in meters
        const distanceInMeters = window.google.maps.geometry.spherical.computeDistanceBetween(
            originLatLng,
            destinationLatLng
        );

        // Convert to miles (optional)
        const distanceInMiles = distanceInMeters / 1609.34;

        setDistance(distanceInMiles);

        // Calculate charges based on distance
        const charges =
            (service.serviceCharges || 0) +
            (service.misCharges || 0) +
            distanceInMiles * (service.mileCharges || 0);
        setTotalCharges(charges.toFixed(2));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const orderData = {
            fullName: bookingData.fullName,
            email: bookingData.email,
            phone: bookingData.phone,
            serviceId: service._id,
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
            distance: distance,
            totalCharges: parseFloat(totalCharges),
        };

        fetch("https://api.carreportpro.com/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
        })
            .then((response) => {
                if (response.ok) {
                    swal({
                        title: "Success!",
                        text: "Your order has been successfully registered!",
                        icon: "success",
                    }).then(() => {
                        // Clear the form fields when the user clicks "OK"
                        setBookingData({
                            fullName: "",
                            email: "",
                            phone: "",
                        });
                        setSelectedLocation(null);
                        setDistance(0);
                        setTotalCharges(0);
                    });
                } else {
                    swal("Error", "Failed to place the order. Please try again.", "error");
                }
                return response.json();
            })
            .then((data) => console.log(data))
            .catch((error) => {
                console.error("Error booking order:", error);
                swal("Error", "An unexpected error occurred. Please try again.", "error");
            });
    };

    if (loading) return <p>Loading...</p>;

    if (!service) return <p>Service not found.</p>;

    return (
        <>
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        name="fullName"
                        value={bookingData.fullName}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        name="email"
                        value={bookingData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleInputChange}
                    />
                    <input
                        id="autocomplete"
                        className="form-control mb-2 search-bar"
                        type="text"
                        placeholder="Search Location"
                        style={{
                            backgroundColor: "#000", // Ensure visibility
                            opacity: 1, // Prevent transparency
                        }}
                    />
                    <div
                        id="map"
                        ref={mapRef}
                        style={{
                            width: "100%",
                            height: "400px",
                            marginBottom: "20px",
                        }}
                    ></div>
                    <h4>Charges: ${totalCharges}</h4>
                    <input
                        type="submit"
                        className="btn btn-primary"
                        value="Book Now"
                    />
                </form>
            </div>
        </>
    );
};

export default ServiceForm;
