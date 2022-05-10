import React from 'react';

const Primarybtn = ({children}) => {
    return (
        <div>
            <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">{children}</button>
        </div>
    );
};

export default Primarybtn;