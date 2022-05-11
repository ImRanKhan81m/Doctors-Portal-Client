import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary mb-10">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" value={format(date, 'PP')} class="input input-bordered w-full my-2 focus:outline-none " disabled />
                        <select name='slot' class="select select-bordered w-full focus:outline-none">
                            {
                                slots?.map(slot=> <option value={slot} >{slot}</option>)
                            } 
                        </select>
                        <input type="text" name='name' placeholder="Your Name" class="input input-bordered w-full my-2 focus:outline-none" />
                        <input type="email" name='email' placeholder="Email Address" class="input input-bordered w-full my-2 focus:outline-none" />
                        <input type="phone" name='phone' placeholder="Enter Phone Number" class="input input-bordered w-full my-2 focus:outline-none" />
                        <input type="submit" value="Submit" class="btn btn-primary bg-gradient-to-r from-secondary to-primary w-full my-2" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;