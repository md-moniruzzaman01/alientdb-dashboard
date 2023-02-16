import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import Notification from '../Shared/Notification';
import { useState } from 'react';
import { useEffect } from 'react';
const AddWarehouse = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [fetchData, setFetchData] = useState(null)

    let Alart;
    const onSubmit = (data) => {
        const warehouseLocation = data.warehouseLocation.trim().toUpperCase()
        const warehousecode = data.warehousecode.trim()
        const warehouseData = { warehousecode, warehouseLocation }
        fetch('https://alientbd-version-2.onrender.com/api/warehouse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // authorization: `bearer ${localStorage.getItem('tmtoken')}`
            },
            body: JSON.stringify(warehouseData),
        })
            .then((response) => response.json())
            .then((data) => {
                setFetchData(data)
            })

    };

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

    return (
        <div className='m-4'>
            <div className='w-full bg-secondary h-11 text-xl font-semibold text-base-100 flex items-center px-4 rounded-t'>Add Warehouse</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-around'>

                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Warehouse code</span>
                        </label>
                        <input type="number"
                            {...register("warehousecode", {
                                required: {
                                    value: true,
                                    message: "warehouse code number is required"
                                },
                                minLength: {
                                    value: 1,
                                    message: 'warehouse code should be greater then 1'
                                },
                            })}
                            placeholder="Type warehouse code..." className="input input-bordered rounded-none rounded-l focus:outline-none focus:ring-1 focus:ring-blue-400" />
                        <label className="label">
                            {errors.warehousecode?.type === 'required' && <span className="label-text text-red-500">{errors.warehousecode?.message}</span>}
                            {errors.warehousecode?.type === 'pattern' && <span className="label-text text-red-500">{errors.warehousecode?.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Warehouse Location</span>
                        </label>
                        <input type="text"
                            {...register("warehouseLocation", {
                                required: {
                                    value: true,
                                    message: "Warehouse Location is required"
                                },
                                pattern: {
                                    value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                                    message: 'Provide a valid Warehouse Location'
                                }
                            })}
                            placeholder="Type warehouse location..." className="input input-bordered uppercase rounded-none rounded-r focus:outline-none focus:ring-1 focus:ring-blue-400" />
                        <label className="label">
                            {errors.warehouseLocation?.type === 'required' && <span className="label-text text-red-500">{errors.warehouseLocation?.message}</span>}
                            {errors.warehouseLocation?.type === 'pattern' && <span className="label-text text-red-500">{errors.warehouseLocation?.message}</span>}
                        </label>
                    </div>

                </div>
                <div className='my-4 flex justify-end'>
                    <input type="submit" className='btn btn-secondary' value="Add" />
                </div>
            </form>
            {Alart}
        </div>
    );
};

export default AddWarehouse;