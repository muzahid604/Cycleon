import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    const { name, picture, FOBPrices, MinOrder } = item;
    return (
        <div className='item text-center'>
            <img className='w-100' src={picture} alt="" />
            <div className='m-3'>
                <h4>{name}</h4>
                <h6> <span>FOB PRICES:</span> {FOBPrices}</h6>
                <h6> <span> MIN. ORDER:</span>  {MinOrder}<small>pics</small></h6>
                <Link to='/'>
                    <Button variant="outline-dark rounded-pill fw-bold">UPDATE</Button></Link>
            </div>
        </div>
    );
};

export default Item;