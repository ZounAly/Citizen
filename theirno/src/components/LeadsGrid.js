import React, { useEffect, useState } from 'react';
import $ from 'jquery'; // Import jQuery
// import 'datatables.net-dt/css/jquery.dataTables.min.css'; // Import DataTables CSS
import 'datatables.net'; // Import DataTables JS
import moment from 'moment';

const LeadsGrid = ({ showTitle }) => {
    const [orders, setOrders] = useState([]);

    // Fetch orders data
    useEffect(() => {
        fetch('http://api.sridigital.com/api/orders') // Update with your server URL
            .then(response => response.json())
            .then(data => {
                setOrders(data);
            })
            .catch(error => console.error('Error fetching orders:', error));
    }, []);

    useEffect(() => {
        // Initialize DataTables only if there are orders
        if (orders.length > 0) {
            console.log("orders: ", orders);
            const table = $('#lead-table').DataTable({
                destroy: true, // Destroy any existing DataTable before reinitializing
                data: orders.map((order, index) => [
                    index + 1, // Incremental S.No
                    order.serviceId.title, // Service Name
                    order.totalCharges || '$0',
                    order.distance,
                    order.orderStatus,
                    moment(order.createdOn).format('DD MM YYYY'),
                    order.completedOn == null ? null : moment(order.completedOn).format('DD MM YYYY')
                ]),
                columns: [
                    { title: 'S.No' },
                    { title: 'Service Name' },
                    { title: 'Total Charges' },
                    { title: 'Distance' },
                    { title: 'Status' },
                    { title: 'Created On' },
                    { title: 'Completed On' }
                ]
            });

            // Cleanup function to destroy DataTables instance when the component unmounts
            return () => {
                table.destroy();
            };
        }
    }, [orders]);
    
    return (
        <div className="d-leads table-div">
            <div className="new-leads">
            {showTitle && <h3 className="text-center titles">Leads</h3>}
                {orders.length > 0 ? (
                    <table id="lead-table" className="table display"></table> 
                ) : (
                    <h4>No Leads Found</h4> 
                )}
            </div>
        </div>
    );
};

export default LeadsGrid;
