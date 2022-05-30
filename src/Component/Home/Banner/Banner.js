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
                        src="https://i.ibb.co/R4f7BqT/man-riding-mountain-bike-low-angle.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://i.ibb.co/7KtfX0H/cyclist-sunny-day-bike-adventure-travel-photo.jpg"
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