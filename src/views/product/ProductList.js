import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { Products } from '../../App';


const ProductList = () => {
    const { productList, setProductList } = useContext(Products)

    const { data: product, isLoading, refetch } = useQuery('product', () => fetch('http://localhost:5000/all').then(res => res.json()));

    useEffect(()=>{
        setProductList(product)
    },[product])

    const DeleteProduct = (id) => {
        fetch(`https://warm-cliffs-27985.herokuapp.com/remove/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const confarm = window.confirm('Delete this item')
                if (confarm) {
                    if (data.deletedCount > 0) {
                        toast('order placed successfully')
                        refetch();
                    } else {
                        toast('order place s unsuccessfully')
                    }
                }

            })
    }

    return (
        <div className='page'>
            <p className='text-3xl font-semibold text-gray-800 m-4'>Product List</p>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Unit</th>
                            <th>Brand</th>
                            <th>Reminder Quantity</th>
                            <th>functions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            productList && productList.map((prodict, index) => <tr key={prodict._id}>
                                <th>{index + 1}</th>
                                <td>{prodict.ProductName}</td>
                                <td>{prodict.ProductUnit}</td>
                                <td>{prodict.Brand}</td>
                                <td className=''>{prodict.Productquantity}</td>
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
        </div>
    );
};

export default ProductList;

