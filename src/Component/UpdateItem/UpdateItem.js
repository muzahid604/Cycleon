import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
    const { itemsId } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/items/${itemsId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))

    }, [])


    return (
        <div>
            <h2>you want to update:{item.name} </h2>
        </div>
    );
};

export default UpdateItem;