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
    }, [])

    let { name, picture, FOBPrices, MinOrder, description, quantity, supplier } = item;


    return (
        <div className='text-center'>
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
                        <Button className='mx-2 text-dark p-2 fw-bold btn-outline-success btn-light hover-color rounded-pill'>DELIVERED</Button>
                    </Card.Body>

                    <Card.Body>
                        <input className='mb-2' type="number" />
                        <Button className='mx-2 text-dark p-2 fw-bold btn-outline-success btn-light hover-color'>Update Stock</Button>
                    </Card.Body>

                </Card>
            </div>
        </div>
    );
};

export default UpdateItem;