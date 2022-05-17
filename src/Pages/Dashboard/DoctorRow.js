import React from 'react';

const DoctorRow = ({ doctor, index }) => {
    const { name, specialty, image } = doctor;


    

    return (
        <tr>
            <th>{++index}</th>
            <td>
                <div class="avatar flex items-center ">
                    <div class="w-16 rounded-xl">
                        <img style={{width:'100%'}} src={image} alt={name}/>
                    </div>
                </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button class="btn btn-xs btn-error">Delete</button></td>
        </tr>
    );
};

export default DoctorRow;