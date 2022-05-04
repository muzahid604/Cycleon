import React, { useEffect, useState } from 'react';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h1 className='text-center'>total items{items.length}</h1>

        </div>
    );
};

export default Items;