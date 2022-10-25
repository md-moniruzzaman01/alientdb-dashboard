import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
const ProductTable = ({product , DeleteProduct}) => {
  
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>SL No</th>
                            <th>Product Name</th>
                            <th>Unit</th>
                            <th>Brand</th>
                            <th>functions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            product && product.map((prodict, index) => <tr key={prodict._id}>
                                <th>{index + 1}</th>
                                <td>{prodict.ProductName}</td>
                                <td>{prodict.ProductUnit}</td>
                                <td>{prodict.Brand}</td>

                                <td className=''>
                                    <div className='w-20'>
                                        <button className="btn btn-secondary text-white btn-xs">Edit</button>
                                        <button onClick={() => DeleteProduct(prodict._id)} className="mx-2 btn btn-secondary text-white btn-xs">Delete</button>
                                    </div>
                                </td>

                            </tr>)
                        }
                    </tbody>


                </table>
            </div>

           
        </>
    );
};

export default ProductTable;