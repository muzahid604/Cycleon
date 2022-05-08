import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='mt-5 bg-dark p-2'>
            <div className='d-flex  justify-content-around p-5'>
                <div className='d-flex flex-column'>
                    <Link to="/" className=' mx-1 hover-color text-light fw-bold'>HOME</Link>
                    <Link to="/blogs" className=' mx-1 hover-color text-light fw-bold'>BLOGS</Link>

                    <Link to="/myBikes" className=' mx-1 hover-color text-light fw-bold'>
                        MY BIKES
                    </Link>

                </div>
                <div className='d-flex flex-column'>

                    <Link to="/login" className='text-light fw-bold mx-1 hover-color '>
                        LOGIN
                    </Link>
                    <Link to="/register" className='text-light fw-bold mx-1 hover-color hover-color '>
                        REGISTER
                    </Link>
                    <Link to="/addItems" className='text-light fw-bold mx-1 hover-color '>
                        ADD ITEMS
                    </Link>
                </div>
                <Link to="/manageItems" className='text-light fw-bold mx-1 hover-color '>
                    MANAGE ITEMS
                </Link>
            </div>
            <p className='text-light text-center fs-5'>Copyright © 2022 J A Muzahid</p>
        </div>
    );
};

export default Footer;