import React from "react";
import InvoicesGrid from '../../components/InvoicesGrid';
import Sidebar from '../../components/Sidebar';
import LeadsFilters from '../../components/LeadsFilters';

function AllInvoices() {
    return (
        <>  
            <div className="d-flex h-100vh">
            <Sidebar />
                <div className="main-content col-md-9">
                    <div className="m-header d-flex justify-content-between">
                        <h4>Invoices</h4>
                        <h5>Date: <span id="dateElement"></span></h5>
                    </div>
                    <LeadsFilters />
                    <InvoicesGrid showTitle={false} />
                </div>
            </div>
        </>
    );
}

export default AllInvoices;
