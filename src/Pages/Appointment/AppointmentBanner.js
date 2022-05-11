
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bgImage from '../../assets/images/bg.png'

const AppointmentBanner = ({date, setDate}) => {
   

    return (
        <div
            style={{
                background: `url(${bgImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
            }}
            class="hero lg:py-10 md:py-5 sm:py-5 lg:px-8 md:px-8 sm:px-7 px-0 mb-10">
            <div style={{ maxWidth: '85rem' }} class="hero-content  flex-col lg:flex-row-reverse ">
                <img style={{ width: '100%' }} src={chair} class="lg:max-w-lg  rounded-lg shadow-2xl  lg:mr-3" alt='Dentist chair' />
                <div className='lg:px-16'>
                    <DayPicker className=' shadow-lg px-8 py-7 my-5'
                         mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;