import { Button } from 'react-bootstrap';
import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
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
                            <Link style={{ textDecoration: 'none' }} to='/' className='mx-3'>BIKES</Link>
                            <Link style={{ textDecoration: 'none' }} to='/' className='mx-3'>EQUIPMENTS</Link>
                            <Link style={{ textDecoration: 'none' }} to='/' className='mx-3'>FIND A DEALER</Link>
                            <Link style={{ textDecoration: 'none' }} to='/' className='mx-3'>BLOG</Link>
                            <Link style={{ textDecoration: 'none' }} to='/' className='mx-3'  >ABOUT US</Link>


                        </Nav>
                        <Form className="d-flex">
                            <Button variant="outline-success">LOGIN</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;