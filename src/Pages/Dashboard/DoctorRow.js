import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, specialty, image, email } = doctor;



    const handleDelete = email => {
        const proceed = window.confirm('Are you sure want to Delete?');
        if (proceed) {
            fetch(`http://localhost:5000/doctor/${email}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        toast.success(`Doctor: ${name} is deleted.`)
                        refetch()
                    }
                })
        }

    }

    return (
        <tr>
            <th>{++index}</th>
            <td>
                <div className="avatar flex items-center ">
                    <div className="w-16 rounded-xl">
                        <img style={{ width: '100%' }} src={image} alt={name} />
                    </div>
                </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={() => handleDelete(email)} className="btn btn-xs btn-error">Delete</button></td>
        </tr>
    );
};

export default DoctorRow;