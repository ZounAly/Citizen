import React, { useEffect, useState } from 'react';
import $ from 'jquery'; // Import jQuery
import 'datatables.net'; // Import DataTables JS

const ServiceGrid = () => {
    const [services, setServices] = useState([]);

    // Fetch services data
    useEffect(() => {
        fetch('http://localhost:5000/api/services') // Update with your server URL
            .then(response => response.json())
            .then(data => {
                setServices(data);
            })
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    // Delete service by ID
    const deleteService = (id) => {
        fetch(`http://localhost:5000/api/services/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                // Remove deleted service from the list
                setServices(services.filter(service => service._id !== id));
                alert('Service deleted successfully');
            } else {
                alert('Failed to delete service');
            }
        })
        .catch(error => console.error('Error deleting service:', error));
    };

    useEffect(() => {
        // Initialize DataTables only if there are services
        if (services.length > 0) {
            const table = $('#service-table').DataTable({
                destroy: true, // Destroy any existing DataTable before reinitializing
                data: services.map((service, index) => [
                    index + 1, // Incremental S.No
                    service.title, // Service Name
                    service.serviceCharges || '$0', // Service Charges
                    service.misCharges || '$0', // Miscellaneous Charges
                    `<button class="btn btn-primary edit-btn" data-id="${service._id}">Edit</button>`,
                    `<button class="btn btn-danger delete-btn" data-id="${service._id}">Delete</button>`
                ]),
                columns: [
                    { title: 'S.No' },
                    { title: 'Service Name' },
                    { title: 'Service Charges' },
                    { title: 'Miscellaneous Charges' },
                    { title: 'Edit Service' },
                    { title: 'Delete Service' }
                ]
            });

            // Unbind previous event listeners
            $('#service-table').off('click', '.edit-btn');
            $('#service-table').off('click', '.delete-btn');

            // Event listener for edit buttons
            $('#service-table').on('click', '.edit-btn', function () {
                const id = $(this).data('id');
                window.location.href = `/add-service?id=${id}`;
            });

            // Event listener for delete buttons
            $('#service-table').on('click', '.delete-btn', function () {
                const id = $(this).data('id');
                if (window.confirm('Are you sure you want to delete this service?')) {
                    deleteService(id);
                }
            });

            // Cleanup function to destroy DataTables instance when the component unmounts
            return () => {
                table.destroy();
            };
        }
    }, [services]);

    return (
        <div className="d-leads table-div">
            <div className="new-leads">
                <h4>Service List</h4>
                <table id="service-table" className="table display"></table>
            </div>
        </div>
    );
};

export default ServiceGrid;
