import React from 'react';
import Items from '../../Items/Items';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Social from '../Social/Social';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Items></Items>
            <Social></Social>

        </div>
    );
};

export default Home;