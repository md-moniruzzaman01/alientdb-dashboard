import React, { useState } from 'react';
import { toast } from 'react-toastify';
import "react-datepicker/dist/react-datepicker.css";
import { useCreateUserWithEmailAndPassword, useSignOut, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import LoadingScreen2 from '../../Shared/LoadingScreen2';
import { useEffect } from 'react';
import Notification from '../../Shared/Notification';

const EmployeeForm = () => {
    // const [startDate, setStartDate] = useState(new Date());
    const [Isadmin, setAdmin] = useState(true);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [signOut, SignOutloading, SignOuterror] = useSignOut(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [fetchData, setFetchData] = useState(null)
    let Alart;
    const handleChange = (e) => {
        const Employeedesignation = e.target.value;
        if (Employeedesignation === 'admin') {
            setAdmin(false)
        } else {
            setAdmin(true)
        }
    }
    if (loading || updating || SignOutloading) {
        return <LoadingScreen2 />
    }

    if (fetchData?.success) {
        Alart = <Notification
          status='open'
          veriant='success'
          title="success"
          message={fetchData?.message}
        />
      } else if (fetchData?.success === false) {
        Alart = <Notification
          status='open'
          veriant='false'
          title="Error found"
          message={fetchData?.message}
        />
      }

    let signInError;
    if (error) {
        const errorlength = error?.message.length || 102
        // .slice(17,errorlength-2)
        signInError = <p className='text-red-500 text-center'>{error?.message}</p>
    }

    async function createFirebaseLogin(data) {
        await createUserWithEmailAndPassword(data.Email, data.password)
        await updateProfile({ displayName: data.fullName })
        await signOut()
    }


    const onSubmit = async (data) => {
       
         await   fetch("https://alientbd-version-2.onrender.com/api/employee", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('tmtoken')}`
                },
                body: JSON.stringify({ data: data })

            })
                .then(res => {
                    if (res.status === 200) {
                         createFirebaseLogin(data)
                        return res.json()
                    }else{
                        console.log('res error',res.status ,res)
                    }
                    
                })
                .then(datajson => {
                    setFetchData(datajson)
                })
        
          

    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                    {/* Employee Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Full Name</span>
                        </label>
                        <input type="text"
                            {...register("fullName", {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                },
                                pattern: {
                                    value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                                    message: 'Provide a valid name'
                                }
                            })}
                            placeholder="Type name here.."
                            className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400 selection:bg-red-400"
                        />
                        <label className="label">
                            {errors.fullName?.type === 'required' && <span className="label-text text-red-500">{errors.fullName?.message}</span>}
                            {errors.fullName?.type === 'pattern' && <span className="label-text text-red-500">{errors.fullName?.message}</span>}
                        </label>
                    </div>
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
                            placeholder="Type email address"
                            className="input input-bordered rounded-none rounded-l focus:outline-none focus:ring-1 focus:ring-blue-400" />
                        <label className="label">
                            {errors.Email?.type === 'required' && <span className="label-text text-red-500">{errors.Email?.message}</span>}
                            {errors.Email?.type === 'pattern' && <span className="label-text text-red-500">{errors.Email?.message}</span>}
                        </label>
                    </div>
                    {/* Number */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Phone number</span>
                        </label>
                        <input type="number"
                            {...register("phoneNumber", {
                                required: {
                                    value: true,
                                    message: "Phone number is required"
                                },
                                pattern: {
                                    value: /^\+?(88)?0?1[3456789][0-9]{8}\b/,
                                    message: 'Provide a valid number of BD'
                                }
                            })}
                            className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400 selection:bg-red-400"
                        />
                        <label className="label">
                            {errors.phoneNumber?.type === 'required' && <span className="label-text text-red-500">{errors.phoneNumber?.message}</span>}
                            {errors.phoneNumber?.type === 'pattern' && <span className="label-text text-red-500">{errors.phoneNumber?.message}</span>}
                        </label>
                    </div>

                    {/* date of birth */}
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">date of birth</span>
                        </label>
                        <ReactDatePicker selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400 w-full" name="dataOfbirth"
                        />
                    </div> */}

                    {/* Designation */}
                    <div className="form-control flex">
                        <label className="label">
                            <span className="label-text font-bold">Designation</span>
                        </label>
                        <select {...register("designation")} onChange={e => handleChange(e)}
                            className="mr-4 select w-20 select-bordered select-sm">
                            <option value="staff">Staff</option>
                            <option value="admin">Admin</option>

                        </select>
                    </div>
                    {/* Empoloy Access */}
                    {Isadmin && <div className="form-control">
                        <h1 className='font-bold mt-4 mb-2'>Empoloy Access</h1>
                        <div className='mx-2'>
                            <div>
                                <input type="checkbox"
                                    {...register("ProductAdd")}
                                // value="ProductAdd"
                                />
                                <label className='ml-2' htmlFor="ProductAdd">Add product</label>
                            </div>
                            <div>
                                <input type="checkbox"
                                    {...register("purches")}
                                />
                                <label className='ml-2' htmlFor="purches">Purches</label>
                            </div>
                            <div>
                                <input type="checkbox"
                                    {...register("orderlist")}
                                />
                                <label className='ml-2' htmlFor="order">Order List</label>
                            </div>
                            <div>
                                <input type="checkbox"
                                    {...register("deleteProduct")}
                                />
                                <label className='ml-2' htmlFor="deleteProduct">Product delete and edit</label>
                            </div>
                        </div>
                    </div>
                    }

                    {/* National ID */}
                    <div className="form-control">
                        <label className="label py-2">
                            <span className="label-text font-semibold text-lg">National ID</span>
                        </label>
                        <input type="number"
                            {...register("NID", {
                                required: {
                                    value: true,
                                    message: "NID Card number is required"
                                },
                                minLength: {
                                    value: 10,
                                    message: 'NID Card number should be greater then 10'
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'NID Card number should be lower then 20'
                                },
                            })}
                            placeholder="Type NID card number here.."
                            className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400"
                        />
                        <label className="label">
                            {errors.NID?.type === 'required' && <span className="label-text text-red-500">{errors.NID?.message}</span>}
                            {errors.NID?.type === 'minLength' && <span className="label-text text-red-500">{errors.NID?.message}</span>}
                            {errors.NID?.type === 'maxLength' && <span className="label-text text-red-500">{errors.NID?.message}</span>}
                        </label>
                    </div>
                    {/* Password */}
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

                    {signInError}
                    <div className="form-control mt-6">
                        <button type="submit" className='btn btn-primary'>Submit</button>
                    </div>
                </div>
            </form>
{Alart}
        </div>

    );
};

export default EmployeeForm;