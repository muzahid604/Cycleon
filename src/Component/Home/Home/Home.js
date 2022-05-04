import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeItems from '../HomeItems/HomeItems';
import Social from '../Social/Social';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <HomeItems></HomeItems>
            <Social></Social>
            <Footer></Footer>
        </div>
    );
};

export default Home;