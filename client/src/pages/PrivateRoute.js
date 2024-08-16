import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page

    const user = localStorage.getItem("user");
    if (!user) {
        return <Navigate to="/login" />;
    } else {
        return <Outlet />;
    }

}

export default PrivateRoute

