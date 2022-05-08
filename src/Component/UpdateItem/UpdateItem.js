import React, { useEffect, useState } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
    const { itemsId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/items/${itemsId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [itemsId])

    let { name, picture, FOBPrices, MinOrder, description, quantity, supplier } = item;
    console.log(item)
    const updateForDelivery = () => {
        if (item.quantity > 0) {
            let Quantity = parseInt(item.quantity);
            Quantity = parseInt(Quantity - 1);
            let updateItems = { Quantity };
            // item.quantity = updateItems;
            // console.log(updateItems)

            const url = `http://localhost:5000/items/${itemsId}`;
            console.log(url)
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateItems)
            })
                .then(res => res.json())
                .then(data => {
                    // setItem(data)
                    setItem(data)
                        ;
                })
        }
    }
    const updateStoke = event => {
        event.preventDefault();
        let Quantity = parseInt(item.quantity);
        const newQuantity = event.target.quantity.value;
        Quantity = Quantity + parseInt(newQuantity);
        let updateItems = { Quantity };
        // send data to the server
        const url = `http://localhost:5000/items/${itemsId}`;
        console.log(url)
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItems)
        })
            .then(res => res.json())
            .then(data => {
                setItem(data)
                event.target.reset();
            })
    }



    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='text-center'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><span>FOB PRICES:</span> {FOBPrices}</ListGroupItem>
                        <ListGroupItem><span> MIN. ORDER:</span>  {MinOrder}<small>pics</small></ListGroupItem>
                        <ListGroupItem> <span> Available: </span> {quantity}pics</ListGroupItem>
                        <ListGroupItem><span> Supplier:</span>  {supplier}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Button onClick={() => updateForDelivery()} className='mx-2 text-dark p-2 fw-bold btn-outline-success btn-light hover-color rounded-pill'>DELIVERED</Button>
                    </Card.Body>

                    <Card.Body>
                        <form onSubmit={updateStoke}>
                            <input className='mb-2' type="number" name='quantity' />

                            <input type="submit" value="Update User" />
                        </form>

                    </Card.Body>

                </Card>
            </div>
        </div>
    );
};

export default UpdateItem;