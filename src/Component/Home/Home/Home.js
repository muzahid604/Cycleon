import React from 'react';
import Banner from '../Banner/Banner';
import HomeItems from '../HomeItems/HomeItems';
import Social from '../Social/Social';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeItems></HomeItems>
            <WhyChoose></WhyChoose>
            <Social></Social>
        </div>
    );
};

export default Home;