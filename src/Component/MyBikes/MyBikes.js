import React, { useEffect, useState } from 'react';
import AddBike from '../AddBike/AddBike';


const MyBikes = () => {
    const [addBike, setAddBike] = useState([])
    useEffect(() => {
        fetch('https://young-taiga-51882.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setAddBike(data))
    }, [])

    return (
        <div>
            <h2 className='text-primary text-center m-4'>MY BIKE</h2>
            <div className='item-card'>
                {
                    addBike?.map(item => <AddBike key={item._id}
                        addBike={item}
                    ></AddBike>)
                }
            </div>
        </div>
    );
};

export default MyBikes;