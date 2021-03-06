import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';
import img from '../../assets/images/treatment.png'
import Primarybtn from '../Shared/Primarybtn';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        },
    ]


    return (
        <div className='py-20 mid-content lg:px-8 md:px-8 sm:px-7 px-1'>
            <div className='text-center '>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5  mt-20 px-3 lg:px-0 md:px-0 sm:px-0'>
                {
                    services.map(service =>
                        <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                }

            </div>
            <div className="hero lg:py-24 md:pt-20 sm:pt-10 pt-5">
                <div className="hero-content flex-col lg:flex-row">
                    <img style={{ width: '100%' }} src={img} className="max-w-lg rounded-lg shadow-2xl" alt='' />
                    <div className='lg:pl-20'>
                        <h1 className="text-5xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Link to={'/appointment'}><Primarybtn >Get Started</Primarybtn></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;