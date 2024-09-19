import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
// import 'datatables.net-dt/css/jquery.dataTables.min.css'; // Import DataTables CSS
import 'datatables.net'; // Import DataTables JS

const LeadsGrid = ({ showTitle }) => {
    const leadsData = [
        // Replace with dynamic data, or keep it empty to simulate no leads
        ['01', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800', '<button class="btn btn-primary">Action</button>'],
        ['02', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800', '<button class="btn btn-primary">Action</button>'],
        ['03', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800', '<button class="btn btn-primary">Action</button>']
    ];
    useEffect(() => {
        
        // Initialize DataTables
        $('#lead-table').DataTable({
            data: leadsData,
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
            $('#lead-table').DataTable().destroy();
        };
    }, []);

    return (
        <div className="d-leads table-div">
            <div className="new-leads">
            {showTitle && <h3 className="text-center titles">Leads</h3>}
                {leadsData.length > 0 ? (
                    <table id="lead-table" className="table display"></table> 
                ) : (
                    <h4>No Leads Found</h4> 
                )}
            </div>
        </div>
    );
};

export default LeadsGrid;
