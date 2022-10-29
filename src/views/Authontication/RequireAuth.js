import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Products } from '../../App';
const RequireAuth = ({ children }) => {
    let location = useLocation();
    const {user, setUser } = useContext(Products);
    const token =  window.localStorage.getItem("token")
    if( !token){
        return <Navigate to="/login" state={{ from: location }} replace />
       
    }
    return children;
};

export default RequireAuth;