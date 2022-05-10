import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';


const Home = () => {
    return (
        <div className='lg:px-12 md:px-12 sm:px-12 px-4'>
            <Banner />
            <Info/>
            <Services/>
        </div>
    );
};

export default Home;