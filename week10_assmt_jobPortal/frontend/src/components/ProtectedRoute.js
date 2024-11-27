import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedTypes }) => {
    const token = localStorage.getItem("token");
    const userType = localStorage.getItem("userType"); // Stored on login

    if (!token || !allowedTypes.includes(userType)) {
        if(userType === 'admin'){
            return <Navigate to="/admin/employees" />;
        }
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
