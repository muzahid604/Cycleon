import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import './ManageItems.css'


const ManageItems = () => {
    const [items, setItems] = useItems();
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            const url = `https://young-taiga-51882.herokuapp.com/items/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
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
            <div className='text-center'>
                <Link to='/addItems'><Button variant="outline-dark mb-5 rounded-pill fw-bold">ADD NEW COLLECTION</Button></Link>
            </div>
        </div>
    );
};

export default ManageItems;