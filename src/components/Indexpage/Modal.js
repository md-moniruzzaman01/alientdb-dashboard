import React, { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import ReactPaginate from 'react-paginate';
const Modal = () => {
    const [pageCount, setPageCount] = useState(0)
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)
    const [productCount, setProductCount] = useState(0)
    const url = "http://localhost:5000/countremainder"
    useEffect(() => {
        const url = `http://localhost:5000/remainder?page=${currentPage}`

        fetch(url, {
        })
            .then(res => res.json())
            .then(data => {
                setData(data);
            })


    }, [currentPage])
    useEffect(() => {
        fetch(url, {
        })
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                setProductCount(count)
                const pages = Math.ceil(count / 10)
                setPageCount(pages)
            })
    }, [])
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="remainder" className="modal-toggle" />
            <div className="modal">

                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="modal-action">
                        <label htmlFor="remainder" className="btn btn-ghost text-4xl"><AiOutlineCloseCircle /></label>
                    </div>
                    <div>
                        <div className=" w-full ">
                            {/* <!-- Top Sales Card --> */}
                            <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full  m-4">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold leading-none text-gray-900">Remainding Quantity</h3>

                                </div>
                                <div className="flow-root">
                                    <ul role="list" className="divide-y divide-gray-200">
                                        {
                                            data && data.map((dt,i) => <li key={i} className="py-3 sm:py-4">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-gray-900 truncate">
                                                            {dt?.Product}
                                                        </p>
                                                        <p className="text-sm text-gray-500 truncate">
                                                            Brand: {dt?.Brand}
                                                        </p>
                                                    </div>
                                                    <div className="inline-flex items-center  font-semibold ">
                                                        Available Quantity: <p className='text-red-700 ml-2'>{dt?.qnt}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            )
                                        }
                                    </ul>

                                </div>
                            </div>

                            {/* Pagination */}
                            <div className=" mb-0 bottom-[-23px] z-40 sticky sm:flex items-center w-full sm:justify-between  right-0 border-t border-gray-200 bg-slate-50 p-2">
                                <div className="flex items-center mb-0">
                                    <span className="text-sm font-normal text-gray-500">Showing <span className="text-gray-900 font-semibold">10</span> of <span className="text-gray-900 font-semibold">{productCount}</span></span>
                                </div>
                                <div className='flex justify-center'>

                                    <ReactPaginate
                                        previousLabel={"«"}
                                        nextLabel={"»"}
                                        breakLabel={"..."}
                                        pageCount={pageCount}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={3}
                                        onPageChange={(e) => setCurrentPage(e.selected)}
                                        containerClassName={"btn-group"}
                                        pageClassName={"btn btn-ghost"}
                                        pageLinkClassName={"page-link "}
                                        previousClassName={"btn btn-ghost text-3xl"}
                                        previousLinkClassName={"btn btn-ghost text-3xl"}
                                        nextClassName={"btn btn-ghost text-3xl"}
                                        nextLinkClassName={"page-link"}
                                        breakClassName={"btn btn-disabled"}
                                        breakLinkClassName={"page-link"}
                                        activeClassName={"btn btn-secondary"}
                                    />
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;