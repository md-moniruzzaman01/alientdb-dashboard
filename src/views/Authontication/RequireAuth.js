import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingScreen2 from '../../components/Shared/LoadingScreen2';
import auth from '../../firebase.init';
const RequireAuth = ({ children }) => {
    let location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <LoadingScreen2></LoadingScreen2>
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;

};

export default RequireAuth;