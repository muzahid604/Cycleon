import React from 'react';
import { SocialIcon } from 'react-social-icons';
const Social = () => {
    return (
        <div>
            <section className="social pt-5">
                <h1 className="text-center fw-bolder mt-5 pt-5">SOCIAL NETWORKS</h1>
                <h3 className="text-center">Get in touch with us in social sites</h3>
                <p className="text-center m-5" >
                    <SocialIcon className='p-3 m-2' url="https://www.facebook.com/" />
                    <SocialIcon className='p-3 m-2' url="https://github.com/" />
                    <SocialIcon className='p-3 m-2' url="https://linkedin.com/in/jaketrent" />
                    <SocialIcon className='p-3 m-2' url='https://twitter.com/' />
                </p>
            </section>
        </div>
    );
};

export default Social;