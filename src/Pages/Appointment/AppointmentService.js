import React from 'react';

const AppointmentService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card border bg-base-100 shadow-md py-3">
            <div className="card-body text-center">
                <h2 className="card-title mx-auto text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0 ? <span>{slots[0]}</span> :
                            <span className='text-red-400'>No Slot Available</span>
                    }
                </p>
                <p className='uppercase'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        for="booking-modal" className="btn btn-primary text-white uppercase bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentService;