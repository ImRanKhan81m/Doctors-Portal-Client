import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L0elPLUYp0aaPHI5RRQSarla1S2UkJylhSfcNpIzmMQwXCZ5uusomgskNT8DtJrIEI3yCuZnVj2geF4WzgLJDX400ydllK777');


const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }


    return (
        <div>
            <div class="card bg-base-100 shadow-xl my-5">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {appointment?.patientName}</p>
                    <h2 class="card-title">Pay For {appointment?.treatment}</h2>
                    <p>Your Appointment: <span className='text-orange-700'>{appointment?.date}</span>  at <span className='text-orange-700'>{appointment?.slot}</span></p>
                    <p>Please pay: ${appointment?.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 max-w-lg shadow-2xl bg-base-100 mx-auto">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;