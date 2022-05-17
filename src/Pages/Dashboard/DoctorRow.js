import React from 'react';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, specialty, image, email } = doctor;


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
            <td>
                <label onClick={()=> setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
                </td>
        </tr>
    );
};

export default DoctorRow;