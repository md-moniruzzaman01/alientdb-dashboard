import React, { useContext } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { toast } from 'react-toastify';
import { Products } from '../App';
const Setting = () => {
    const { user } = useContext(Products);
    function refreshPage() {
        window.location.reload(false);
    }
    const HandleChangePassword = (e) => {
        e.preventDefault();
        const OldPassword = e.target.OldPassword.value;
        const NewPassword = e.target.NewPassword.value;
        const userName = user?.name
        const orderDetails = { userName, OldPassword, NewPassword }
        fetch('http://localhost:5000/change-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization:`bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(orderDetails),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status == "OK") {
                    toast('password change successfully');
  
                        window.localStorage.removeItem('token');
                        refreshPage()

                }else if (data.error == 'Invalied password') {
                    toast("password is not match");
                } else if (data.error == 'Epmloyee not found') {
                    toast('user not found');
                } else {
                    toast('some think wrong plase try again');
                }
            })

    }
    return (
        <div>
            <div className=' text-xl font-semibold px-4 '>Change password</div>
            <div className='flex justify-center mt-20'><p className='text-8xl'><FaUserCircle /></p> </div>
            <p className='text-center mt-4 text-xl'>Name: {user?.name}</p>
            <form onSubmit={HandleChangePassword} className="card flex-shrink-0 w-full max-w-2xl mx-auto">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Old password</span>
                        </label>
                        <input type="password" name='OldPassword' placeholder="Type your old password here..." className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Current password</span>
                        </label>
                        <input type="password" name='NewPassword' placeholder="Type your new password here.." className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary text-base-100" type="submit" value="Submit" />
                    </div>

                </div>
            </form >
        </div >
    );
};

export default Setting;