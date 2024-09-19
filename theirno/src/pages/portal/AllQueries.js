import React from "react";
import QueriesGrid from '../../components/QueriesGrid';
import Sidebar from '../../components/Sidebar';
import QueriesFilters from '../../components/QueriesFilters';

function AllQueries() {
    return (
        <>  
            <div className="d-flex h-100vh">
            <Sidebar />
                <div className="main-content col-md-9">
                    <div className="m-header d-flex justify-content-between">
                        <h4>Queries</h4>
                        <h5>Date: <span id="dateElement"></span></h5>
                    </div>
                    <QueriesFilters />
                    <QueriesGrid />
                </div>
            </div>
        </>
    );
}

export default AllQueries;
