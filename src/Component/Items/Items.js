import React from 'react';
import useItems from '../../hooks/useItems';
import Item from './Item/Item';
import './Items.css';

const Items = () => {
    const [items] = useItems();
    return (
        <div>
            <h2 className='text-primary text-center m-4'>OUR BIKES</h2>
            <div className='item-card'>
                {
                    items?.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;