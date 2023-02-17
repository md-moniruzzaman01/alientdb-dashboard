import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import LoadingScreen2 from '../../Shared/LoadingScreen2';
import Notification from '../../Shared/Notification';

const EditProductBox = ({ id }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loading, setLoading] = useState(true)
    const [ProductEdit, setProductEdit] = useState(null)
    const [fetchData, setFetchData] = useState(null)
    let Alart;
    useEffect(() => {
        fetch(`http://localhost:5000/api/product/${id}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('tmtoken')}`
            },
        })
            .then(res => {
                if (res.status === 429) {
                    setFetchData({ success: false, message: "To many request from this ip" })
                } else {
                    setFetchData(null)
                }
                return res.json()
            })
            .then(data => {
                setLoading(false)
                if (data?.success) {
                    setProductEdit(data?.data)
                } else {
                    setFetchData(data)
                }
            });
    }, [id])

    if (loading) {
        return <LoadingScreen2 />
    }
    const HandleEdit = (e) => {
        setProductEdit({ ...ProductEdit, [e.target.name]: e.target.value })
    }
    const ProductUpdateHandle = (data) => {
        fetch(`http://localhost:5000/api/product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('tmtoken')}`
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data?.success) {
                    alert('update product successfull')
                    window.location.href = '/product-list'
                } else {
                    setFetchData(data)
                }
            })
    }



    if (fetchData?.success === false) {
        Alart = <Notification
            status='open'
            veriant='false'
            title="Error found"
            message={fetchData?.message}
        />
    }
    return (
        <div className='page px-4 py-2'>

            {/* 
new form */}
            <div className="flex items-center justify-center bg-base-100 rounded shadow">
                <form onSubmit={handleSubmit(ProductUpdateHandle)} className="card flex-shrink-0 rounded w-full shadow bg-base-100 p-0 m-0">

                    <div className='w-full bg-secondary h-11 text-xl font-semibold text-base-100 flex items-center px-4'>Product Entry</div>
                    <div className="card-body px-4 md:px-7 py-0">

                        {/* Product Name */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Product Name</span>
                            </label>
                            <input type="text"
                                {...register("Product")}
                                value={ProductEdit.Product}
                                onChange={(e) => HandleEdit(e)}
                                className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />
                        </div>

                        {/* Brand */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Brand</span>
                            </label>
                            <input type="text"
                                {...register("Brand")}
                                value={ProductEdit.Brand}
                                onChange={(e) => HandleEdit(e)}
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
                                    minLength: {
                                        value: 1,
                                        message: 'Cost should be greater then 1'
                                    },
                                })}
                                value={ProductEdit.ParchesCost}
                                onChange={(e) => HandleEdit(e)}
                                className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />
                            <label className="label">
                                {errors.ParchesCost?.type === 'minLength' && <span className="label-text text-red-500">{errors.ParchesCost?.message}</span>}
                            </label>
                        </div>

                        {/* Unit */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Unit</span>
                            </label>

                            {/* select select-bordered */}
                            <select {...register("Unit")}
                                value={ProductEdit.Unit}
                                onChange={(e) => HandleEdit(e)}
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
                                    minLength: {
                                        value: 1,
                                        message: 'quantity should be greater then 1'
                                    },
                                })}
                                value={ProductEdit.remaindquantity}
                                onChange={(e) => HandleEdit(e)}
                                className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />
                            <label className="label">
                                {errors.remaindquantity?.type === 'minLength' && <span className="label-text text-red-500">{errors.remaindquantity?.message}</span>}
                            </label>
                        </div>

                        <div className="flex my-4">
                            <input type="submit" className="btn btn-error px-7 text-base-100" value="Update product" />
                        </div>
                    </div>
                </form>
            </div>


            {Alart}

        </div>
    );
};

export default EditProductBox;