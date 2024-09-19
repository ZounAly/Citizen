import React from "react";
import LeadsGrid from '../../components/LeadsGrid';
import Sidebar from '../../components/Sidebar';
import LeadsFilters from '../../components/LeadsFilters';

function AllLeads() {
    return (
        <>  
            <div className="d-flex h-100vh">
            <Sidebar />
                <div className="main-content col-md-9">
                    <div className="m-header d-flex justify-content-between">
                        <h4>Leads</h4>
                        <h5>Date: <span id="dateElement"></span></h5>
                    </div>
                    <LeadsFilters />
                    <LeadsGrid showTitle={false} />
                </div>
            </div>
        </>
    );
}

export default AllLeads;
