import React  from 'react';
import { toast } from 'react-toastify';
import AddProductCsvFile from '../../components/product/AddProductCsvFile';
import { useForm} from "react-hook-form";
import Notification from '../../components/Shared/Notification';
import { useState } from 'react';
const AddProduct = () => {

    const [fetchData, setFetchData] = useState(null)
    let Alart;

    const { register, formState: { errors }, handleSubmit} = useForm();
    const onSubmit = (data) => {
        fetch('https://alientbd-version-2.onrender.com/api/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('tmtoken')}`
            },
            body: JSON.stringify(data),
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
            IsReload={false}
            title="Error found"
            message={fetchData?.message}
        />
    }

    return (
        <div className='page px-4 py-2'>
            <div className='flex justify-between m-4'>
                <p className='text-3xl font-semibold text-gray-800 '>Add Product</p>
                <AddProductCsvFile />
            </div>
            <div className="flex items-center justify-center bg-base-100 rounded shadow">
                <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 rounded w-full shadow bg-base-100 p-0 m-0">

                    <div className='w-full bg-secondary h-11 text-xl font-semibold text-base-100 flex items-center px-4'>Product Entry</div>
                    <div className="card-body px-4 md:px-7 py-0">

                        {/* Product Name */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Product Name</span>
                            </label>
                            <input type="text"
                                {...register("Product", {
                                    required: {
                                        value: true,
                                        message: "product name is required"
                                    }
                                })}
                                placeholder="Type product name here...."
                                className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />
                            <label className="label">
                                {errors.Product?.type === 'required' && <span className="label-text text-red-500">{errors.Product?.message}</span>}

                            </label>
                        </div>

                        {/* Brand */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Brand</span>
                            </label>
                            <input type="text"
                                {...register("Brand", {
                                    required: {
                                        value: true,
                                        message: "Brand is required"
                                    },
                                })}
                                placeholder="Type brand name here.."
                                className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />
                            <label className="label">
                                {errors.Brand?.type === 'required' && <span className="label-text text-red-500">{errors.Brand?.message}</span>}
                            </label>
                        </div>

                        {/* Purchase Cost */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Purchase Cost</span>
                            </label>
                            <input type="number"
                                {...register("ParchesCost", {
                                    required: {
                                        value: true,
                                        message: "Cost number is required"
                                    },
                                    minLength: {
                                        value: 1,
                                        message: 'Cost should be greater then 1'
                                    },
                                })}
                                placeholder="Type product cost here.."
                                className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />
                            <label className="label">
                                {errors.ParchesCost?.type === 'required' && <span className="label-text text-red-500">{errors.ParchesCost?.message}</span>}
                                {errors.ParchesCost?.type === 'minLength' && <span className="label-text text-red-500">{errors.ParchesCost?.message}</span>}
                            </label>
                        </div>

                        {/* Unit */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Unit</span>
                            </label>
                            {/* <input type="text"
                                name='unit' placeholder="Type Product unit here..."
                                className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400" 
                            /> */}
                            {/* select select-bordered */}
                            <select {...register("Unit")}
                                className="select select-bordered focus:outline-none focus:ring-1 focus:ring-blue-400"
                            >
                                <option value="pics">pics</option>
                                <option value="kg">kg</option>
                                <option value="liter">liter</option>
                                <option value="other">other</option>
                            </select>
                        </div>

                        {/* Reminder Quantity */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Reminder Quantity</span>
                            </label>
                            <input type="number"
                                {...register("remaindquantity", {
                                    required: {
                                        value: true,
                                        message: "quantity number is required"
                                    },
                                    minLength: {
                                        value: 1,
                                        message: 'quantity should be greater then 1'
                                    },
                                })}
                                placeholder="Type Quantity here..."
                                className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />
                            <label className="label">
                                {errors.remaindquantity?.type === 'required' && <span className="label-text text-red-500">{errors.remaindquantity?.message}</span>}
                                {errors.remaindquantity?.type === 'minLength' && <span className="label-text text-red-500">{errors.remaindquantity?.message}</span>}
                            </label>
                        </div>

                        <div className="flex my-4">
                            <input type="submit" className="btn btn-error px-7 text-base-100" value="Add product" />
                        </div>
                    </div>
                </form>
            </div>
{Alart}
        </div>
    );
};

export default AddProduct;