import React from 'react';
import './Header.css';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            <Navbar expand="lg md">
                <Container fluid>
                    <Navbar.Brand href="#">CYCLEON</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link style={{ textDecoration: 'none' }} to='/' className='mx-3'>HOME</Link>
                            <Link style={{ textDecoration: 'none' }} to='/items' className='mx-3'>BIKES</Link>
                            {
                                user ? <Link style={{ textDecoration: 'none' }} to='/manageItems' className='mx-3'>MANAGE BIKES</Link>
                                    : <p></p>
                            }
                            {
                                user ? <Link style={{ textDecoration: 'none' }} to='/addItems' className='mx-3'>ADD BIKES</Link>
                                    : <p></p>
                            }
                            {
                                user ? <Link style={{ textDecoration: 'none' }} to='/myBikes' className='mx-3'>MY BIKES</Link>
                                    : <p></p>
                            }
                            <Link style={{ textDecoration: 'none' }} to='/blogs' className='mx-3'>BLOGS</Link>

                        </Nav>
                        <Form className="d-flex">
                            {user ? <Link to='/login' onClick={logout} className='mx-2 text-dark p-2 fw-bold btn-outline-success btn-danger hover-color rounded-pill'>LOG OUT</Link>
                                : <Link to="/login" className='mx-2 text-dark p-2 fw-bold btn-outline-success btn-light hover-color rounded-pill'>LOG IN</Link>}


                            {
                                user ? <p></p> : <Link to="/register" className='mx-2 text-dark p-2 fw-bold btn-outline-success btn-light hover-color rounded-pill'>SIGN UP</Link>

                            }
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;