import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <div className='mid-content lg:px-8 md:px-8 sm:px-7 px-1'>
            <h4 className='text-xl text-secondary text-center' >Available Appointments on {format(date, 'PP')}</h4>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5  mt-20 px-3 lg:px-0 md:px-0 sm:px-0 lg:mb-20 md:mb-5'>
                {
                    services.map(service => <AppointmentService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></AppointmentService>)
                }
            </div>
            {treatment && <BookingModal 
            date={date}
            treatment={treatment}
            setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;