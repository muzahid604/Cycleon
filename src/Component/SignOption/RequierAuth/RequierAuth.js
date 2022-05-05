import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import './RequireAuth.css';


const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <div className='d-flex align-items-center justify-content-center mx-auto m-5'><Spinner className='d-flex align-items-center justify-content-center' animation="grow" />
            <h4 className='fs-1 text-success' >Loading...</h4>
        </div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;