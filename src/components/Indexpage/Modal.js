import React, { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import ReactPaginate from 'react-paginate';
import Notification from '../Shared/Notification';
const Modal = () => {
    const [pageCount, setPageCount] = useState(0)
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)
    const [productCount, setProductCount] = useState(0)

    const [fetchData, setFetchData] = useState(null)
    let Alart;

    useEffect(() => {
        const url = `https://alientbd-version-2.onrender.com/api/utils?page=${currentPage}`

        fetch(url, {
        })
            .then(res => {
                if(res.status === 429){
                    setFetchData({success:false,message:"To many request from this ip"})
                }else{
                    setFetchData(null)
                }
              return  res.json()
            })
            .then(data => {
                if (data?.success) {
                    setData(data.data);
                    const count = data.count;
                    setProductCount(count)
                    const pages = Math.ceil(count / 10)
                    setPageCount(pages)
                } else {
                    setFetchData(data)
                }

            })


    }, [currentPage])

    if (fetchData?.success === false) {
        Alart = <Notification
            status='open'
            veriant='false'
            title="Error found"
            message={fetchData?.message}
        />
    }
    return (
        <div >
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="remainder" className="modal-toggle" />
            <div className="modal">

                <div className="modal-box w-11/12 max-w-5xl">

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
                                            data && data.map((dt,) => <li key={dt._id} className="py-3 sm:py-4">
                                                <div className="flex itms-center space-x-4">
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-gray-900 truncate">
                                                            {dt?.doc?.Product}
                                                        </p>
                                                        <p className="text-sm text-gray-500 truncate">
                                                            Brand: {dt?.doc?.Brand}
                                                        </p>
                                                    </div>
                                                    <div className="inline-flex items-center  font-semibold ">
                                                        Available Quantity: <p className='text-red-700 ml-2'>{dt?.doc?.qnt || 0}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            )
                                        }
                                    </ul>

                                </div>
                                {Alart}
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
                <div className="modal-action ">
                    <label htmlFor="remainder" className="btn btn-ghost text-4xl text-red-600"><AiOutlineCloseCircle /></label>
                </div>
            </div>
        </div>
    );
};

export default Modal;