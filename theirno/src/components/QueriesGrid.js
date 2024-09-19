import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
// import 'datatables.net-dt/css/jquery.dataTables.min.css'; // Import DataTables CSS
import 'datatables.net'; // Import DataTables JS

const QueriesGrid = () => {
    useEffect(() => {
        // Initialize DataTables
        $('#service-table').DataTable({
            data: [
                ['01', 'System Architect', 'Edinburgh@domain.com', '5421', '2011/04/25'],
    ['02', 'System Architect', 'Edinburgh@domain.com', '5421', '2011/04/25'],
    ['03', 'System Architect', 'Edinburgh@domain.com', '5421', '2011/04/25']
            ],
            columns: [
                { title: 'S. No' },
        { title: 'Name' },
        { title: 'Email' },
        { title: 'Phone' },
        { title: 'Message' }
            ]
        });

        // Cleanup function to destroy DataTables instance when the component unmounts
        return () => {
            $('#service-table').DataTable().destroy();
        };
    }, []);

    return (
        <div className="d-leads table-div">
            <div className="new-leads">
                <h4>No Queries Found</h4>
                <table id="service-table" className="table display"></table>
            </div>
        </div>
    );
};

export default QueriesGrid;
