import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className='not-found'>
                <img src="https://i.ibb.co/D836KPC/i-Stock-1142986365.jpg" alt="" />
                <Link className='not-found-link mb-5' to='/'>GO TO HOME PAGE</Link>
            </div>
        </div>
    );
};

export default NotFound;