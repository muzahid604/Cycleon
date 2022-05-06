import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';


const SocialSign = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        navigate('/home')
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <div className='d-flex align-items-center justify-content-center mx-auto'><Spinner className='d-flex align-items-center justify-content-center' animation="grow" />
            <h4 className='fs-1 text-success' >Loading...</h4>
        </div>
    }
    if (error) {
        return <div className='d-flex align-items-center justify-content-center mx-auto'><Spinner className='d-flex align-items-center justify-content-center' animation="grow" />
            <h4 className='fs-1 text-success' >OOPS {error.message}</h4>
        </div>
    }
    return (
        <div className=''>
            <Button onClick={() => signInWithGoogle()} variant="text-dark p-2 fw-bold btn-outline-dark btn-light hover-color rounded-pill text-center" type="submit">
                SignIn with Google
            </Button>
        </div>
    );
};

export default SocialSign;