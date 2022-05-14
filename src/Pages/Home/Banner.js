import React from 'react';
import chair from '../../assets/images/chair.png'
import bgImg from '../../assets/images/bg.png'
import Primarybtn from '../Shared/Primarybtn';

const Banner = () => {
    return (
        <div style={{
            background: `url(${bgImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
        }} className="hero lg:py-44 md:py-5 sm:py-5 lg:px-8 md:px-8 sm:px-7 px-1 mb-10">
            <div className="mid-content hero-content flex-col lg:flex-row-reverse">
                <img style={{ width: '100%' }} src={chair} className="max-w-lg rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Primarybtn>Get Started</Primarybtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;