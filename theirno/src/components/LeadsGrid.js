import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net';
import moment from 'moment';
import QRCode from 'qrcode';

const LeadsGrid = ({ showTitle }) => {
    const [orders, setOrders] = useState([]);

    // Fetch orders data
    useEffect(() => {
        fetch('http://api.carreportpro.com/api/orders') // Update with your server URL
            .then(response => response.json())
            .then(data => setOrders(data))
            .catch(error => console.error('Error fetching orders:', error));
    }, []);

    useEffect(() => {
        if (orders.length > 0) {
            const table = $('#lead-table').DataTable({
                destroy: true,
                data: orders.map((order, index) => [
                    index + 1,
                    order.serviceId.title,
                    order.totalCharges || '$0',
                    order.distance || 'N/A',
                    order.orderStatus || 'Pending',
                    moment(order.createdOn).format('DD MM YYYY'),
                    order.completedOn == null
                        ? 'Not Completed'
                        : moment(order.completedOn).format('DD MM YYYY'),
                    `<button class="generate-qr-btn" data-id="${order._id}" data-charges="${order.totalCharges}" data-email="${order.email || ''}">
                        Generate QR Code
                     </button>`,
                ]),
                columns: [
                    { title: 'S.No' },
                    { title: 'Service Name' },
                    { title: 'Total Charges' },
                    { title: 'Distance' },
                    { title: 'Status' },
                    { title: 'Created On' },
                    { title: 'Completed On' },
                    { title: 'Actions' },
                ],
            });

            // Add click event for Generate QR Code button
            $('#lead-table').on('click', '.generate-qr-btn', async function () {
                const orderId = $(this).data('id');
                const charges = $(this).data('charges') || 0;
                const email = $(this).data('email') || "";
            
                try {
                    // Generate PayPal Payment Link
                    const paymentUrl = `https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_xclick&business=sb-dpilm517625@business.example.com&amount=${charges}&currency_code=USD&item_name=Service Payment`;
            
                    // Generate QR Code
                    const qrData = paymentUrl;
                    const qrCode = await QRCode.toDataURL(qrData);
            
                    // Send Email with QR Code and Payment Link
                    const response = await fetch('http://api.carreportpro.com/api/send-email', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            email: email, 
                            subject: 'Your Payment QR Code and Link',
                            message: `Please use the following link to make the payment: ${paymentUrl}. Alternatively, you can use the QR Code.`,
                            qrCodeContent: qrData,
                            paymentUrl, // Add the payment link to the payload
                        }),
                    });
            
                    const result = await response.json();
                    if (response.ok) {
                        alert('Payment link and QR Code sent successfully!');
                    } else {
                        console.error('Error sending email:', result.error);
                        alert('Failed to send payment link and QR Code. Please try again.');
                    }
                } catch (error) {
                    console.error('Error generating or sending payment link/QR Code:', error);
                    alert('An error occurred while generating or sending the payment link/QR Code.');
                }
            });            

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
