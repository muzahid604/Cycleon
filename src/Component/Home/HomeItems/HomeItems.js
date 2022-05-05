import React from 'react';
import useItems from '../../../hooks/useItems';
import Item from '../../Items/Item/Item';
import './HomeItems.css';

const HomeItems = () => {
    const [items] = useItems();
    const homeItems = items.slice(0, 6);

    return (
        <div>
            <h2 className='text-primary my-5 text-center'>INVENTORY</h2>
            <div className='item-card'>

                {
                    homeItems?.map(homeItem => <Item
                        key={homeItem._id}
                        item={homeItem}
                    ></Item>)
                }
            </div>
        </div>
    );
};


export default HomeItems;