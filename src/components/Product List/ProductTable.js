import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import DeleteProduct from '../utils/functions/DeleteProduct';
const ProductTable = ({product }) => {
    const navigate = useNavigate()
    const EditHandleProduct = (id)=> navigate(`/product-edit/${id}`)
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const handleDelete= (id)=>{
        DeleteProduct(id)
    }
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
                            <th>Remainder</th>
                            {admin  && <th>functions</th>}
                        </tr>
                    </thead>
                    <tbody>

                        {
                            product && product.map((prodict, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{prodict.Product}</td>
                                <td>{prodict.Unit}</td>
                                <td>{prodict.Brand}</td>
                                <td className='w-11'>{prodict.remaindquantity}</td>

                                {admin && <td className=''>
                                    <div className='w-20'>
                                        <button className="btn btn-sm btn-success text-base-100 rounded-sm"   onClick={()=>EditHandleProduct(prodict._id)}>Edit</button>
                                        <button onClick={() => handleDelete(prodict._id)} className="btn btn-sm btn-error text-base-100 rounded-sm">Delete</button>
                                    </div>
                                </td>}

                            </tr>)
                        }
                    </tbody>


                </table>
            </div>

           
        </>
    );
};

export default ProductTable;