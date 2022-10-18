import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { Products } from '../../App';


const ProductList = () => {
    const [pageCount, setPageCount] = useState(0)
    const [productCount, setProductCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [size, setSize] = useState(100)
    const { productList, setProductList } = useContext(Products)

    function refreshPage() {
        window.location.reload(false);
    }
    useEffect(() => {
        const url = `https://warm-cliffs-27985.herokuapp.com/all?page=${currentPage}&size=${size}`


        fetch(url, {
        })
            .then(res => res.json())
            .then(data => {
                setProductList(data);
                console.log('productlist');
            })
    }, [currentPage, size])

  
    useEffect(() => {
        fetch("https://warm-cliffs-27985.herokuapp.com/countproduct", {
        })
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                setProductCount(count)
                const pages = Math.ceil(count / size)
                setPageCount(pages)
            })
    }, [])
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
                        refreshPage()
                    } else {
                        toast('order place s unsuccessfully')
                    }
                }

            })
    }
    const Deleteall = (id) => {
        fetch(`https://warm-cliffs-27985.herokuapp.com/removeall`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const confarm = window.confirm('Delete this item')
                if (confarm) {
                    if (data.deletedCount > 0) {
                        toast('order placed successfully')
                        refreshPage()
                    } else {
                        toast('order place s unsuccessfully')
                    }
                }

            })
    }
    return (
        <div className='page'>
            <button onClick={Deleteall}>delete all</button>
            <div className='flex justify-between items-center'>
                <p className='text-3xl font-semibold text-gray-800 m-4'>Product List ({productCount})</p>
                <select onChange={e => setSize(e.target.value)} className="mr-4 select w-20 select-bordered select-sm">
                    <option value="100">100</option>
                    <option value="10">10</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                    <option value="150">150</option>
                </select>
            </div>
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
                            productList && productList.map((prodict, index) => <tr key={prodict._id}>
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
            {/*  pagination */}
            <div className='flex justify-center mt-5 pb-4'>

                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={(e) => setCurrentPage(e.selected)}
                    containerClassName={"btn-group "}
                    pageClassName={"btn"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"btn"}
                    previousLinkClassName={"btn"}
                    nextClassName={"btn"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"btn btn-disabled"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"btn btn-secondary"}
                />
            </div>
        </div>
    );
};

export default ProductList;

