import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Henry',
            review: '',
            location: 'Chittagong',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Henry',
            review: '',
            location: 'Dhaka',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Henry',
            review: '',
            location: 'California',
            img: people3
        }
    ]


    return (
        <section className='lg:pt-20 md:pt-14 sm:pt-10 pt-8 mid-content lg:px-8 md:px-8 sm:px-7 px-4'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className='text-3xl '> What Our Patients say !</h2>
                </div>
                <div>
                    <img src={quote} className='lg:w-48 sm:w-24 w-20' alt="" />
                </div>
            </div>
            <div className='lg:py-20 md:py-16 sm:py-12 py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =>
                        <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;  