import React, { useState } from 'react';
import { useUpdatePassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FaUserCircle } from "react-icons/fa";
import LoadingScreen2 from '../components/Shared/LoadingScreen2';
import Notification from '../components/Shared/Notification';
import auth from '../firebase.init';
const Setting = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updatePassword, updating, error] = useUpdatePassword(auth);
    const [fetchData, setFetchData] = useState(null)
    let Alart;

    const onSubmit = async (data) => {
        const success = await updatePassword(data.password);
        setFetchData(success)
    };

    if (updating) {
        return <LoadingScreen2 />
    }

    if (fetchData) {
        Alart = <Notification
            status='open'
            veriant='success'
            title="success"
            message={fetchData?.message}
        />
    } else if (fetchData === false) {
        Alart = <Notification
            status='open'
            veriant='false'
            IsReload={false}
            title="Error found"
            message={fetchData?.message}
        />
    }

    return (
        <div>
            <div className=' text-xl font-semibold px-4 '>Change password</div>
            <div className='flex justify-center mt-20'><p className='text-8xl'><FaUserCircle /></p> </div>
            {/* <p className='text-center mt-4 text-xl'>Name: {user?.name}</p> */}
            <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-2xl mx-auto">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label py-2">
                            <span className="label-text font-semibold text-lg">Password</span>
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
                            className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400"
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text text-red-500">{errors.password?.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text text-red-500">{errors.password?.message}</span>}
                        </label>
                    </div>
                    {error ? <p>{error.message}</p> : ''}
                    <div className="form-control mt-6">
                        <input className="btn btn-primary text-base-100" type="submit" value="Submit" />
                    </div>

                </div>
            </form >
            {Alart}
        </div >
    );
};

export default Setting;