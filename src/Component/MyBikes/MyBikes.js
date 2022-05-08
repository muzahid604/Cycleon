import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../src/firebase.init'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-bootstrap';
const MyBikes = () => {
    const { register, handleSubmit } = useForm();
    const { itemsId } = useParams();
    const [user] = useAuthState(auth);
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `https://young-taiga-51882.herokuapp.com/items/${itemsId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [itemsId])
    const onSubmit = data => {
        const url = `http://localhost:5000/order`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast('ADD YOUR BIKE')
                console.log(result)
            });
    }

    return (
        <div className='w-50  mx-auto border p-4 m-2'>
            <h3>{item?.name.slice(0, 30)}</h3>
            <img className='w-25 m-2 text-center' src={item?.picture} alt="" />
            <h4>ADD FOR ME</h4>
            <form className='d-flex flex-column mb-2' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' readOnly value={user?.displayName} placeholder='Your name' {...register("name", { required: true })} />
                <input className='mb-2' readOnly value={user?.email} placeholder='Email' {...register("email")} />
                <input className='mb-2' placeholder='Enter Order quantity' type="number" {...register("MinOrder")} />
                <input className='mb-2' type="submit" value="Add Bike" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyBikes;