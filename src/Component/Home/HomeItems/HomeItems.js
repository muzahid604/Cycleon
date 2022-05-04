import React from 'react';
import useItems from '../../../hooks/useItems';
import Item from '../../Items/Item/Item';
import './HomeItems.css';

const HomeItems = () => {
    const [items] = useItems();
    const homeItems = items.slice(3, 9);

    return (
        <div className='item-card'>
            {
                homeItems?.map(homeItem => <Item
                    key={homeItem._id}
                    item={homeItem}
                ></Item>)
            }
        </div>
    );
};


export default HomeItems;