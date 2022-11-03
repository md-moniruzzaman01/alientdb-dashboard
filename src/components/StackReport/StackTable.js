import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Products } from '../../App';

const StackTable = ({product , DeleteProduct}) => {
    const navigate = useNavigate()
    const EditHandleProduct = (id)=> navigate(`/purches-product-edit/${id}`)
    const {  user } = useContext(Products);
    return (
        <div className="overflow-x-auto min-h-[70vh]">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>SL No</th>
                            <th>Product Name</th>
                            <th>Brand</th>
                            <th>Total Purchase</th>
                            <th>Total Sold</th>
                            <th>In Stock</th>
                            <th>function</th>
                          
                        </tr>
                    </thead>
                    <tbody>

                        {
                            product && product.map((prodict, index) => <tr key={prodict._id}>
                                <th>{index + 1}</th>
                                <td>{prodict?.Product}</td>
                                <td>{prodict?.Brand}</td>
                                <td></td>
                                <td></td>
                                <td>{prodict?.qnt}</td>
                                {user?.role === "admin" && <td className=''>
                                    <div className='w-20'>
                                        <button className="btn btn-sm btn-success text-base-100 rounded-sm"   onClick={()=>EditHandleProduct(prodict._id)}>Edit</button>
                                        <button onClick={() => DeleteProduct(prodict._id)} className="btn btn-sm btn-error text-base-100 rounded-sm">Delete</button>
                                    </div>
                                </td>}
                                


                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
    );
};

export default StackTable;