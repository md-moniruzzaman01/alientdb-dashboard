import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const EditProductBox = ({ id }) => {
    const [ProductEdit, setProductEdit]=useState({Product:'',Brand:'',ParchesCost:'',Unit:'',remaindquantity:''})
    useEffect(()=>{
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'GET',
            headers: {
                authorization:`bearer ${localStorage.getItem('token')}`
            },
        })
        .then(res => res.json())
        .then(data => {
            setProductEdit(data)
        });
    },[])
    const HandleEdit = (e)=>{
        setProductEdit({...ProductEdit,[e.target.name]:e.target.value})
    }
    const ProductUpdateHandle= (e)=>{
        e.preventDefault();
        fetch(`http://localhost:5000/product-update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                authorization:`bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(ProductEdit),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast('update sucessfull')
                    window.location.href = '/product-list'
                }else{
                    toast('update error')
                }
            })
    }
    return (
        <div className='page px-4 py-2'>
            <div className="flex items-center justify-center bg-base-100 rounded shadow">
                <form onSubmit={ProductUpdateHandle} className="card flex-shrink-0 rounded w-full shadow bg-base-100 p-0 m-0">

                    <div className='w-full bg-secondary h-11 text-xl font-semibold text-base-100 flex items-center px-4'>Edit Product</div>
                    <div className="card-body px-4 md:px-7 py-0">

                        {/* Product Name */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Product Name</span>
                            </label>
                            <input type="text" name="Product"  value={ProductEdit.Product} onChange={(e)=>HandleEdit(e)} placeholder="Type product name here...." className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400"  required/>
                        </div>

                        {/* Brand */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Brand</span>
                            </label>
                            <input type="text" name='Brand' value={ProductEdit.Brand} onChange={(e)=>HandleEdit(e)} placeholder="Type brand name here.." className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400" />
                        </div>

                        {/* Purchase Cost */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Purchase Cost</span>
                            </label>
                            <input type="text" name='ParchesCost' value={ProductEdit.ParchesCost} onChange={(e)=>HandleEdit(e)} placeholder="Type product cost here.." className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400"  required/>
                        </div>

                        {/* Unit */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Unit</span>
                            </label>
                            <input type="text" name='Unit' value={ProductEdit.Unit} onChange={(e)=>HandleEdit(e)} placeholder="Type Product unit here..." className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400"  required/>
                        </div>

                        {/* Reminder Quantity */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Reminder Quantity</span>
                            </label>
                            <input type="text" name='remaindquantity' value={ProductEdit.remaindquantity} onChange={(e)=>HandleEdit(e)} placeholder="Type Quantity here..." className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400"  required/>
                        </div>

                        <div className="flex my-4">
                            <button className="btn btn-secondary px-7 text-base-100">submit</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default EditProductBox;