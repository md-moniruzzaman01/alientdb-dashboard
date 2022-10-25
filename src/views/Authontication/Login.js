import React from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Products } from '../../App';
const Login = () => {
    const {user, setUser } = useContext(Products)
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


   const token =  window.localStorage.getItem("token")

   if(token){
    navigate(from, { replace: true })
 }
    const handleLogin = (e) => {
            e.preventDefault();
            const username= e.target.username.value;
            const password = e.target.password.value;
            const data= { username, password }

            fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.status == "OK") {
                        console.log('login sucess');
                        setUser(data.user);
                        window.localStorage.setItem('token',data.data);
                        
                    }else if (data.error == 'Invalied password') {
                        console.log("password is not match");
                    }else if (data.error == 'Epmloyee not found') {
                        console.log('user not found');
                    }else{
                        console.log('some think wrong plase try again');
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
                                    <span className="label-text">username</span>
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