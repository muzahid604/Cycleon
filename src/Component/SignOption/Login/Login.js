import React, { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import auth from '../../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import SocialSign from '../SocialSign/SocialSign';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password)

    }
    if (loading || sending) {
        return <div className='d-flex m-5 align-items-center justify-content-center mx-auto'>
            <Spinner className='d-flex align-items-center justify-content-center' animation="grow" />
            <h4 className='fs-1 text-success' >Loading...</h4>
        </div>
    }
    if (error) {
        return <div className='d-flex align-items-center justify-content-center mx-auto'>
            <Spinner className='d-flex align-items-center justify-content-center' animation="grow" />
            <h4 className='fs-1 text-success' >OOPS {error.message}</h4>
        </div>
    }
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('email send for reset');
    }

    const navigateRegister = event => {
        navigate('/register')
    }
    return (
        <div className=' mx-auto my-5 login'>
            <h2 className='text-center m-2'>LOGIN</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} required type="password" placeholder="Password" />
                </Form.Group>
                <p className='p-2'>New to CYCLEON? <Link to='/register' className='text-danger' onClick={navigateRegister}>Please Register</Link></p>
                <p className=''><Button className='px-0 w-50 btn-danger' onClick={resetPassword}>Reset Password </Button></p>
                <Button variant="text-dark p-2 fw-bold btn-outline-dark btn-light hover-color rounded-pill text-center" type="submit">
                    LOGIN</Button>
            </Form>
            <hr />
            <SocialSign></SocialSign>
            <ToastContainer />
        </div>
    );
};

export default Login;