import React from 'react';
import Emtypage from '../../components/Shared/Emtypage';

const AddProduct = () => {
    return (
        <div className='page px-4 py-2'>
            <p className='text-3xl font-semibold text-gray-800'>Add Product</p>


            <div className="flex items-center justify-center py-2">

                <div className="card flex-shrink-0 rounded w-full shadow bg-base-100 p-0 m-0">
                    <div className='w-full bg-secondary h-11 text-xl font-semibold text-base-100 flex items-center px-4'>Product Entry</div>
                    <div className="card-body px-4 md:px-7 py-0">

                        {/* Product Name */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Product Name</span>
                            </label>
                            <input type="text" placeholder="Type product name here...." className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400" />
                        </div>

                        {/* Brand */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Brand</span>
                            </label>
                            <input type="text" placeholder="Type brand name here.." className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400" />
                        </div>

                        {/* Purchase Cost */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Purchase Cost</span>
                            </label>
                            <input type="text" placeholder="Type product cost here.." className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400" />
                        </div>

                        {/* Unit */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Unit</span>
                            </label>
                            <input type="text" placeholder="Type Product unit here..." className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400" />
                        </div>

                        {/* Reminder Quantity */}
                        <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Reminder Quantity</span>
                            </label>
                            <input type="text" placeholder="Type Quantity here..." className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400" />
                        </div>

                        <div className="flex my-4">
                            <button className="btn btn-secondary px-7 text-base-100">Add product</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;