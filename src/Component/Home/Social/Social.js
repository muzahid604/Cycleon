import React from 'react';

const Social = () => {
    return (
        <div>
            <section className="cintainer social pt-5">
                <h1 className="text-center fw-bolder mt-5 pt-5">SOCIAL NETWORKS</h1>
                <h3 className="text-center">Get in touch with us in social sites</h3>
                <p className="text-center">
                    <a className="social-icons" href=""><i className="fab fa-facebook-f social-icon"></i></a>
                    <a className="social-icons" href=""><i className="fab fa-instagram social-icon"></i></a>
                    <a className="social-icons" href=""><i className="fab fa-twitter social-icon"></i></a>
                    <a className="social-icons" href=""><i className="fab fa-linkedin-in social-icon"></i></a>

                </p>
            </section>
        </div>
    );
};

export default Social;