import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { Products } from '../../App';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LoadingScreen2 from '../../components/Shared/LoadingScreen2';
import useToken from '../../hooks/useToken';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    let location = useLocation();
    const navigate= useNavigate();
    let from = location.state?.from?.pathname || "/";
    let signInError;

    const [token]=useToken(user)

    useEffect(()=>{

        if (token) {
            navigate(from,{replace:true});
            
        }
    },[token,from,navigate])
  
    const onSubmit = data => {
        signInWithEmailAndPassword(data.Email,data.password)
    };

if(user){
    console.log(user);
}
if( loading){
return <LoadingScreen2/>
}
if(error){
    const errorlength =  error?.message.length || 102
    signInError= <p className='text-red-500 text-center'>{error?.message.slice(17,errorlength-2)}</p>
}
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card rounded-none flex-shrink-0 w-full max-w-sm shadow bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='text-2xl font-semibold px-4 '> Inventory Pro
                            <sup className="badge badge-ghost text-xs">By Time<span className='text-red-600 ml-1'>M</span>achine</sup>
                        </h1>
                        {/* useName */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">your email</span>
                            </label>
                            <input {...register("Email", {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                                className="input input-bordered rounded-none rounded-l focus:outline-none focus:ring-1 focus:ring-blue-400" />
                            <label className="label">
                                {errors.Email?.type === 'required' && <span className="label-text text-red-500">{errors.Email?.message}</span>}
                                {errors.Email?.type === 'pattern' && <span className="label-text text-red-500">{errors.Email?.message}</span>}
                            </label>
                        </div>
                        {/* Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: {
                                    value: true,
                                    message: "password is missing"
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be a 6 characters or longer'
                                }
                            })}
                                className="input input-bordered rounded-none rounded-l focus:outline-none focus:ring-1 focus:ring-blue-400" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text text-red-500">{errors.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text text-red-500">{errors.password?.message}</span>}
                    
                            </label>
                        </div>
                        {signInError}
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-secondary" />
                        </div>
                    </form>
                </div>
            </div>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", {
                    minLength: {
                        value: 1,
                        message: 'error message'
                    }
                })} />
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <input type="number" {...register("age", { min: 18, max: 99 })} />
               
                <input type="submit" />
            </form> */}
        </div>
    );
};

export default Login;