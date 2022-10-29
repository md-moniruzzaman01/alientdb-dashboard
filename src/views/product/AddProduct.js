import React from 'react';
import { toast } from 'react-toastify';
import AddProductCsvFile from '../../components/product/AddProductCsvFile';

const AddProduct = () => {
    const AddProductHandle = e => {
        e.preventDefault();
        const ProductName = e.target.productname.value;
        const Brand = e.target.brand.value;
        const ParchesCost = e.target.cost.value;
        const ProductUnit = e.target.unit.value;
        const remaindquantity = e.target.quantity.value;
        const product = { ProductName, Brand, ParchesCost, ProductUnit, remaindquantity }



        fetch('http://localhost:5000/add', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then((response) => response.json())
            .then((data) => {
                toast('Product add successfully')
                e.target.reset();
            })
             
    }
    return (
        <div className='page px-4 py-2'>
           <div className='flex justify-between m-4'>
                <p className='text-3xl font-semibold text-gray-800 '>Add Product</p>
                <AddProductCsvFile/>
            </div>
            <div className="flex items-center justify-center bg-base-100 rounded shadow">
                <form onSubmit={AddProductHandle} className="card flex-shrink-0 rounded w-full shadow bg-base-100 p-0 m-0">

                    <div className='w-full bg-secondary h-11 text-xl font-semibold text-base-100 flex items-center px-4'>Product Entry</div>
                    <div className="card-body px-4 md:px-7 py-0">

                        {/* Product Name */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Product Name</span>
                            </label>
                            <input type="text" name="productname" placeholder="Type product name here...." className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400"  required/>
                        </div>

                        {/* Brand */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Brand</span>
                            </label>
                            <input type="text" name='brand' placeholder="Type brand name here.." className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400" />
                        </div>

                        {/* Purchase Cost */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Purchase Cost</span>
                            </label>
                            <input type="text" name='cost' placeholder="Type product cost here.." className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400"  required/>
                        </div>

                        {/* Unit */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Unit</span>
                            </label>
                            <input type="text" name='unit' placeholder="Type Product unit here..." className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400"  required/>
                        </div>

                        {/* Reminder Quantity */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Reminder Quantity</span>
                            </label>
                            <input type="text" name='quantity' placeholder="Type Quantity here..." className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400"  required/>
                        </div>

                        <div className="flex my-4">
                            <button className="btn btn-secondary px-7 text-base-100">Add product</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddProduct;