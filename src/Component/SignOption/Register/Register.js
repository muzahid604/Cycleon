import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Register = () => {
    return (
        <div>
            <div className=' mx-auto my-5 login'>
                <h2 className='text-center m-2'>SING UP</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="text-dark p-2 fw-bold btn-outline-success btn-light hover-color rounded-pill text-center" type="submit">SIGNUP</Button>
                </Form>
            </div>
        </div>
    );
};

export default Register;