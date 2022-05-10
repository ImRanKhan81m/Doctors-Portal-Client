import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div class="hero lg:py-44 md:py-5 sm:py-5 ">
            <div style={{maxWidth:'88rem'}} class="hero-content flex-col lg:flex-row-reverse">
                <img style={{width:'100%'}} src={chair} className="max-w-lg rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;