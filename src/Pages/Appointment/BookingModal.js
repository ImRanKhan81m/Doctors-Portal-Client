import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary mb-10">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" value={format(date, 'PP')} className="input input-bordered w-full my-2 focus:outline-none " disabled />
                        <select name='slot' className="select select-bordered w-full focus:outline-none">
                            {
                                slots?.map(slot => <option value={slot} >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full my-2 focus:outline-none" />
                        <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full my-2 focus:outline-none" />
                        <input type="phone" name='phone' placeholder="Enter Phone Number" className="input input-bordered w-full my-2 focus:outline-none" />
                        <input type="submit" value="Submit" className="btn btn-primary bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary w-full my-2 " />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;