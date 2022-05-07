import React from 'react';
import { Button, Table } from 'react-bootstrap';
import useItems from '../../../hooks/useItems';
import './ManageItems.css'


const ManageItems = () => {
    const [items, setItems] = useItems();
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            const url = `http://localhost:5000/items/${id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr className='text-center'>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {
                    items?.map(item =>
                        <tbody key={item._id}>
                            <tr>
                                <td className='text-center'>{item.name.slice(0, 30)}</td>
                                <td className='text-center'><img className='table-img' src={item.picture} alt="" /></td>
                                <td className='text-center'>{item.quantity}</td>
                                <td className='text-center'><Button onClick={() => handleDelete(item._id)} variant="outline-dark rounded-pill fw-bold">DELETE</Button></td>
                            </tr>
                        </tbody>
                    )
                }
            </Table>
        </div>
    );
};

export default ManageItems;