import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import TopOfPage from '../Shared/TopOfPage';
const OrderListPage = () => {
    const [pageCount, setPageCount] = useState(0)
    const [product, setProduct] = useState([])
    const [productCount, setProductCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [size, setSize] = useState(100)
    function refreshPage() {
        window.location.reload(false);
    }
    // const { data: product, isLoading, refetch } = useQuery('product', () => fetch(`http://localhost:5000/all-order?page=${currentPage}&size=${size}`).then(res => res.json()));
    useEffect(() => {
        fetch(`http://localhost:5000/all-order?page=${currentPage}&size=${size}`,{
            headers: {
                authorization:`bearer ${localStorage.getItem('token')}`
            },
        })
        .then(res => res.json())
       .then(data=> {
        setProduct(data)
       })
    }, [currentPage, size])
    useEffect(() => {
        fetch("http://localhost:5000/countOrder", {
        })
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                setProductCount(count)
                const pages = Math.ceil(count / size)
                setPageCount(pages)
            })
    }, [size])

    const DeleteOrder = (id) => {
        fetch(`http://localhost:5000/order-remove/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const confarm = window.confirm('Delete this item')
                if (confarm) {
                    if (data.deletedCount > 0) {
                        toast('order delete successfully')
                       refreshPage()
                    } else {
                        toast('order delete unsuccessfully')
                    }
                }

            })
    }

    const navigate = useNavigate()
    const ViewInvoiceHandle = (id)=> navigate(`/invoice/${id}`)

    return (
        <div>
            <TopOfPage setSize={setSize} pageName="Order List"/>
            <div className="overflow-x-auto min-h-[70vh]">
                <table className="table table-zebra w-full text-center">

                    <thead>
                        <tr>
                            <th>Invoice No.</th>
                            <th>Date</th>
                            <th>Warehouse</th>
                            <th>Person In Charge</th>
                            <th>Functions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            product && product.map((prodict, index) => <tr key={prodict._id}>
                                <th>{prodict?.InvoiceHandle}</th>
                                <td>12/11/2022</td>
                                <td>{prodict?.warehouseChoose}</td>
                                <td>{prodict?.InChargePerson}</td>
                                
                                <td>


                                    <div className="z-40 ">
                                      <button className='btn btn-sm btn-success text-base-100 rounded-sm'  onClick={()=>ViewInvoiceHandle(prodict._id)}>view</button>
                                      {/* <button className='btn btn-sm btn-warning rounded-sm'>Edit</button>
                                      <button className='btn btn-sm btn-error text-base-100 rounded-sm' onClick={()=> DeleteOrder(prodict._id)} >Delete</button> */}
                                    </div>

                                </td>


                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
            {/*  pagination */}
            <div className="bg-white z-40 sticky sm:flex items-center w-full sm:justify-between bottom-0 right-0 border-t border-gray-200 p-2">
                <div className="flex items-center mb-2 sm:mb-0">
                    <span className="text-sm font-normal text-gray-500">Showing <span className="text-gray-900 font-semibold">{size}</span> of <span className="text-gray-900 font-semibold">{productCount}</span></span>
                </div>
                <div className='flex justify-center'>

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
        </div>
    );
};

export default OrderListPage;