import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    const { name, picture, FOBPrices, MinOrder, description, quantity, supplier } = item;
    return (
        <div className='item text-center'>
            <img className='w-100' src={picture} alt="" />
            <div className='m-3'>
                <h5>{name}</h5>
                <p className='mb-3'>{description}</p>
                <h6> <span> Available: </span>{quantity}pics</h6>
                <h6> <span>FOB PRICES:</span> {FOBPrices}</h6>
                <h6> <span> MIN. ORDER:</span>  {MinOrder}<small>pics</small></h6>
                <h6> <span> Supplier:</span>  {supplier}</h6>
                <Link to='/'>
                    <Button variant="outline-dark rounded-pill fw-bold mt-5">UPDATE</Button></Link>
            </div>
        </div>
    );
};

export default Item;