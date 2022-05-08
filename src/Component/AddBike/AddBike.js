import React from 'react';


const AddBike = ({ addBike }) => {
    const { name, picture, FOBPrices, MinOrder, description, quantity, supplier } = addBike;

    return (
        <div className='AddBike text-center'>
            <img className='w-100' src={picture} alt="" />
            <div className='m-3'>
                <h5>{name}</h5>
                <p className='mb-3'>{description}</p>
                <h6> <span> Available: </span>{quantity}pics</h6>
                <h6> <span>FOB PRICES:</span> {FOBPrices}</h6>
                <h6> <span> MIN. ORDER:</span>  {MinOrder}<small>pics</small></h6>
                <h6> <span> Supplier:</span>  {supplier}</h6>
            </div>
        </div>
    );
};

export default AddBike;