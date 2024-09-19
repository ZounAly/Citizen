import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Link } from 'react-router-dom';

const ServicesSlider = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Initialize Lenis smooth scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Fetch dynamic services from API
        fetch('http://localhost:5000/api/services')
            .then(response => response.json())
            .then(data => {
                setServices(data);
            })
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    useEffect(() => {
        // Reinitialize Owl Carousel after services have been set
        if (services.length > 0) {
            const $owlCarousel = window.$('#services .owl-carousel');
            if ($owlCarousel.length) {
                $owlCarousel.owlCarousel({
                    loop: true,
                    margin: 10,
                    center: true,
                    nav: true,
                    dots: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 2
                        },
                        1000: {
                            items: 3
                        }
                    }
                });
            }
        }
    }, [services]);

    const generateServiceLink = (title) => {
        return `/services/${title.replace(/\s+/g, '-')}`;
    };    

    return (
        <section className="services" id="services">
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center">
                            <h2>Our Services</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className="owl-carousel owl-theme">
                            {services.map((service, index) => (
                                <div className="item text-center" key={service._id}>
                                    <img src={service.serviceImages[0]?.url} alt={`Service ${index + 1}`} />
                                    <h5>Service {index + 1}</h5>
                                    <h4>{service.title}</h4>
                                    <Link 
                                        to={generateServiceLink(service.title)} 
                                        className="btn btn-primary"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSlider;
