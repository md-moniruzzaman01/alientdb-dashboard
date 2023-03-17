import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { toast } from 'react-toastify';

const ShortProductBox = () => {
    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [CurrentPage, setCurrentPage] = useState(0);
    useEffect(() => {
        const url = `https://alientbd-version-2.onrender.com/api/product/low-qnt?page=${CurrentPage}`

        fetch(url, {
        })
            .then(res => res.json())
            .then(data => {
                if (data?.success) {
                    setData(data.data);
                    setPageCount()
                } else {
                    toast(data.data)
                }


            })

    }, [])

    return (
        <div>
            <div className=" w-full ">
                {/* <!-- Top Sales Card --> */}
                <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full  m-4">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold leading-none text-gray-900">Empty Quantity</h3>
                        <a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
                            View all
                        </a>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200">
                            {
                                data && data.map(dt => <li className="py-3 sm:py-4">
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
    );
};

export default ShortProductBox;