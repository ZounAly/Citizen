import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const userEmail = localStorage.getItem("userEmail"); // Check if email is stored in localStorage

    if (!userEmail) {
        // If user is not logged in, redirect to login page
        return <Navigate to="/login" replace />;
    }

    // If user is logged in, render the component (children)
    return children;
}

export default ProtectedRoute;