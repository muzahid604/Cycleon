import React, { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialSign from '../SocialSign/SocialSign';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);

    const emailRef = useRef('');
    const nameRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    if (user) {
        console.log(user)
        navigate('/home')
    }
    if (loading || updating) {
        return <div className='d-flex m-5 align-items-center justify-content-center mx-auto'><Spinner className='d-flex align-items-center justify-content-center' animation="grow" />
            <h4 className='fs-1 text-success' >Loading...</h4>
        </div>
    }
    if (error || updateProfileError) {
        return <div className='d-flex align-items-center justify-content-center mx-auto'>
            <Spinner className='d-flex align-items-center justify-content-center' animation="grow" />
            <h4 className='fs-1 text-success' >OOPS {error.message}</h4>
        </div>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
    }
    const navigateLogin = event => {
        navigate('/login')
    }
    return (
        <div>
            <div className=' mx-auto my-5 login'>
                <h2 className='text-center m-2'>SING UP</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="name" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passRef} required type="password" placeholder="Password" />
                    </Form.Group><p className='m-2'>Already have an account? <Link to='/login' className=' text-danger' onClick={navigateLogin}>Please LogIn</Link></p>
                    <Button variant="text-dark p-2 fw-bold btn-outline-dark btn-light hover-color rounded-pill text-center" type="submit">SIGN UP</Button>
                </Form>
                <hr />
                <SocialSign></SocialSign>
            </div>
        </div>
    );
};

export default Register;