import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, index, refetch}) => {
    const {email, role} = user;

    const makeAdmin =()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
            headers:{
                authorization: `Beared ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            refetch()
            toast.success(`Successfully made an admin `)
        })
    }


    return (
        <tr>
            <th>{++index}</th>
            <td>{email}</td>
            <td>{ role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">make admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;