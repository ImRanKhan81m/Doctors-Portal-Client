import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsam maiores laboriosam adipisci cupiditate earum numquam cum consequuntur sequi non?</p>
                <div className="flex items-center mt-4">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review?.img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review?.name}</h4>
                        <p>{review?.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;