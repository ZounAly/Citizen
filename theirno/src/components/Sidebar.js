import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import sidebarLogo from '../images/footer-logo.png';

const Sidebar = () => {
    const location = useLocation(); // Get the current location

    // Define handleLogout function
    const handleLogout = () => {
        localStorage.removeItem("userEmail");
        window.location.href = '/login'; // Redirect to login page after logout
    };

    return (
        <div className="sidebar col-md-3 bg-blk">
            <div className="s-header d-flex align-items-center">
                <img src={sidebarLogo} className="img-fluid" alt="Logo" />
            </div>
            <nav className="d-nav">
                <ul className="nav flex-column">
                    <li className={`nav-item d-flex align-items-center ${location.pathname === '/dashboard' ? 'active' : ''}`}>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <a className="nav-link" href="/dashboard">Dashboard</a>
                    </li>
                    <li className={`nav-item d-flex align-items-center ${location.pathname === '/all-services' ? 'active' : ''}`}>
                        <i className="fa fa-cogs" aria-hidden="true"></i>
                        <a className="nav-link" href="/all-services">Services</a>
                    </li>
                    <li className={`nav-item d-flex align-items-center ${location.pathname === '/all-leads' ? 'active' : ''}`}>
                        <i className="fa fa-users" aria-hidden="true"></i>
                        <a className="nav-link" href="/all-leads">Leads</a>
                    </li>
                    <li className={`nav-item d-flex align-items-center ${location.pathname === '/all-invoices' ? 'active' : ''}`}>
                        <i className="fa fa-folder-open" aria-hidden="true"></i>
                        <a className="nav-link" href="/all-invoices">Invoices</a>
                    </li>
                    <li className={`nav-item d-flex align-items-center ${location.pathname === '/all-queries' ? 'active' : ''}`}>
                        <i className="fa fa-question-circle" aria-hidden="true"></i>
                        <a className="nav-link" href="/all-queries">Queries</a>
                    </li>
                </ul>
                {/* Add onClick to trigger handleLogout */}
                <button className="collapse-button border-0 p-0" id="logout" onClick={handleLogout}>
                    <i className="fa fa-sign-out"></i>
                    <span>Logout</span>
                </button>
            </nav>
        </div>
    );
};

export default Sidebar;
