import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://i.ibb.co/VqHC5xN/nicolas-picard-Jj-BQLWs2-UPA-unsplash-1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://i.ibb.co/5hw0jcw/beau-runsten-m-R-N67-Xj-THg-unsplash-1.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>

            </Carousel>
            <div className='banner-text'>
                <h1>FLY WITH <span className='special-text'> CYCLEON </span></h1>
                <h2>The Right Bike for Your Lifestyle</h2>
            </div>
        </div>
    );
};

export default Banner;