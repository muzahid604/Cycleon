import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import auth from '../../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
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
                <Button variant="text-dark p-2 fw-bold btn-outline-success btn-light hover-color rounded-pill text-center" type="submit">
                    LOGIN</Button>
            </Form>
        </div>
    );
};

export default Login;