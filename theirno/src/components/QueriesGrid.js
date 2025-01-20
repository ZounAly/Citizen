import React, { useEffect, useState } from 'react';
import $ from 'jquery'; // Import jQuery
// import 'datatables.net-dt/css/jquery.dataTables.min.css'; // Import DataTables CSS
import 'datatables.net'; // Import DataTables JS
import moment from 'moment';

const QueriesGrid = () => {
    const [queries, setQueries] = useState([]);

    // Fetch queries data
    useEffect(() => {
        fetch('https://api.carreportpro.com/api/queries') // Update with your server URL
            .then(response => response.json())
            .then(data => {
                setQueries(data.queries);
            })
            .catch(error => console.error('Error fetching queries:', error));
    }, []);

    useEffect(() => {
        // Initialize DataTables only if there are queries
        if (queries.length > 0) {
            console.log("queries: ", queries);
            const table = $('#service-table').DataTable({
                destroy: true, // Destroy any existing DataTable before reinitializing
                data: queries.map((query, index) => [
                    index + 1, // Incremental S.No
                    query.name, // Service Name
                    query.email,
                    query.phone,
                    query.message,
                    moment(query.createdOn).format('DD MM YYYY'),
                ]),
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
                table.destroy();
            };
        }
    }, [queries]);

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
