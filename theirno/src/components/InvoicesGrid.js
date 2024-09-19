import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import 'datatables.net'; // Import DataTables JS

const InvoicesGrid = ({ showTitle }) => {
    const invoiceData = [
        ['01', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800', '<button class="btn btn-primary">Action</button>'],
        ['02', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800', '<button class="btn btn-primary">Action</button>'],
        ['03', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800', '<button class="btn btn-primary">Action</button>']
    ];

    useEffect(() => {
        // Initialize DataTables
        $('#service-table').DataTable({
            data: invoiceData,
            columns: [
                { title: 'S. No' },
                { title: 'Col Title' },
                { title: 'Col Title' },
                { title: 'Col Title' },
                { title: 'Col Title' },
                { title: 'Col Title' },
                { title: 'Col Title' }
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
                {showTitle && <h3 className="text-center titles">Invoices</h3>} {/* Conditionally render the title */}
                {invoiceData.length > 0 ? (
                    <table id="service-table" className="table display"></table> // Render table if there's data
                ) : (
                    <h4>No Invoices Found</h4> // Render this if there's no data
                )}
            </div>
        </div>
    );
};

export default InvoicesGrid;
