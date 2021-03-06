import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
    const { name, email } = deletingDoctor;

    const handleDelete = () => {
        fetch(`https://agile-harbor-38425.herokuapp.com/doctor/${email}`, {
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
                    setDeletingDoctor(null)
                    refetch()
                }
            })
    }

    return (

        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete {name}?</h3>
                    <p class="py-4">This will be permanently deleted. Continue?</p>
                    <div class="modal-action">
                        <label for="delete-confirm-modal" class="btn ">Cancel</label>
                        <button onClick={() => handleDelete()} className="btn btn-md btn-error text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;