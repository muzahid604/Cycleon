import React from 'react';
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/items`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    };
    return (
        <div className='w-50  mx-auto border p-4 m-2' >
            <h4>ADD A FANCY BIKE</h4>
            <form className='d-flex flex-column mb-2' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Enter Bike name' {...register("name", { required: true })} />
                <input className='mb-2' placeholder='Enter Short description' {...register("description")} />
                <input className='mb-2' placeholder='Photo URL' {...register("picture")} />
                <input className='mb-2' placeholder='Enter Supplier Name' {...register("supplier")} />
                <input className='mb-2' placeholder='Enter Price' type="number" {...register("FOBPrices")} />
                <input className='mb-2' placeholder='Enter Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Enter MinOrder' type="number" {...register("MinOrder")} />
                <input className='mb-2' type="submit" value="Add Bike" />
            </form>
        </div>
    );
};

export default AddItems;