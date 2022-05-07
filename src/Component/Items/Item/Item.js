import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    const { _id, name, picture, FOBPrices, MinOrder, description, quantity, supplier } = item;
    const navigate = useNavigate();

    const navigateToItemDetail = _id => {
        navigate(`/items/${_id}`);
    }
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

                <Button onClick={() => navigateToItemDetail(_id)} variant="outline-dark rounded-pill fw-bold mt-5">UPDATE</Button>
            </div>
        </div>
    );
};

export default Item;