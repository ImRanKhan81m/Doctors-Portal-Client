import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import appointment from '../../assets/images/appointment.png'
import Primarybtn from '../Shared/Primarybtn';

const MakeAppointment = () => {
    return (
        <section
            className='lg:px-8 md:px-8 sm:px-7 px-4'
            style={
                { background: `url(${appointment})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }
            }>
            <div className='flex justify-center items-center mid-content'>
                <div className='flex-1 hidden lg:block'>
                    <img className='mt-[-100px]' src={doctor} alt="" />
                </div>
                <div className='flex-1 md:py-8 sm:py-8 py-8'>
                    <h3 className='text-xl text-primary font-bold '>Appointment</h3>
                    <h2 className='text-3xl text-white '>Make an Appointment Today</h2>
                    <p className='text-white my-4 pr-10'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Primarybtn>Get Started</Primarybtn>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;