import React, { useEffect } from "react";
import Sidebar from '../../components/Sidebar';
import LeadsGrid from '../../components/LeadsGrid';
import InvoicesGrid from '../../components/InvoicesGrid';
import $ from 'jquery'; // Import jQuery

function Dashboard() {
    useEffect(() => {
        // Initialize the datepicker once the component mounts
        $(function () {
            const today = new Date(); // Get the current date
    const dateString = today.toDateString(); // Format the date to a string
    document.getElementById('dateElement').textContent = dateString; // Display the date
        });
    }, []); 
    return (
        <>  
            <div className="d-flex h-100vh">
            <Sidebar />
                <div className="main-content col-md-9">
                <div className="m-header d-flex justify-content-between">
                        <h4>Dashboard</h4>
                        <h5>Date: <span id="dateElement"></span></h5>
                    </div>
                    <LeadsGrid showTitle={true} />
                    <InvoicesGrid showTitle={true} />
                </div>
            </div>
        </>
    );
}

export default Dashboard;
