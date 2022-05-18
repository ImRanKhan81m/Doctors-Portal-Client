import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`https://agile-harbor-38425.herokuapp.com/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/login')
                    }

                    return res.json()
                })
                .then(data => {
                    setAppointments(data)
                })
        }
    }, [user, navigate])


    return (
        <div>
            <h2 className='text-xl py-3'>My Appointments: {appointments.length}</h2>
            <div className="overflow-x-auto ">
                <table className="table  w-full ">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Date</th>
                            <th className='text-center'>Time</th>
                            <th className='text-center'>Treatment</th>
                            <th className='text-center'>Transaction Id</th>
                            <th className='text-center'>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments?.map((a, index) => <tr key={a._id} className='hover'>
                                <th>{++index}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>

                                <td>{(a.price && a.transactionId) && <p><span className='text-success font-bold'>{a.transactionId}</span></p>} </td>

                                {(a.price && !a.paid) && <td> <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-sm btn-success'>Pay Now</button></Link> </td>}

                            
                                <td>{(a.price && a.paid) && <button className='btn btn-sm btn-success'>Paid </button>}  </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;