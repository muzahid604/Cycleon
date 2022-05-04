import React from 'react';
import useItems from '../../hooks/useItems';
import Item from './Item/Item';
import './Items.css';

const Items = () => {
    const [items] = useItems();
    return (
        <div className='item-card'>
            {
                items?.map(item => <Item
                    key={item._id}
                    item={item}
                ></Item>)
            }
        </div>
    );
};

export default Items;