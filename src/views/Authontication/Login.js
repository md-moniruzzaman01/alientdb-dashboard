import React from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Products } from '../../App';
const Login = () => {
    const { user, setUser } = useContext(Products)
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const token = window.localStorage.getItem("token")

    if (token) {
        navigate(from, { replace: true })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        const data = { username, password }

        fetch('https://alientbd-servar.onrender.com/login', {
            method: 'POST',
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status == "OK") {
                    toast('login sucess');
                    setUser(data.user);
                    window.localStorage.setItem('token', data.data);
                    window.location.href = '/'

                } else if (data.error == 'Invalied password') {
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
            <div className="hero min-h-screen bg-base-200">
                <div className="card rounded-none flex-shrink-0 w-full max-w-sm shadow bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <h1 className='text-3xl font-semibold px-4 '> Inventory Pro
                            <sup className="badge badge-ghost">By New<span className='text-red-600'>T</span>ech</sup>
                        </h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User name or full name</span>
                            </label>
                            <input type="text" placeholder="Type here..." name='username' className="input input-bordered rounded-none rounded-l focus:outline-none focus:ring-1 focus:ring-blue-400" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="type password here..." name='password' className="input input-bordered rounded-none rounded-l focus:outline-none focus:ring-1 focus:ring-blue-400" />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-secondary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;