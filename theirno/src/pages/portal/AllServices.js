import React from "react";
import ServiceGrid from '../../components/ServiceGrid';
import Sidebar from '../../components/Sidebar';

function AllServices() {
    return (
        <>  
            <div className="d-flex h-100vh">
            <Sidebar />
                <div className="main-content col-md-9">
                    <div className="m-header d-flex justify-content-between">
                        <h4>Services</h4>
                        <a href="/add-service" className="btn btn-primary">Add New Service</a>
                    </div>
                    <ServiceGrid />
                </div>
            </div>
        </>
    );
}

export default AllServices;
