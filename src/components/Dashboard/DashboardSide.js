import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiCardboardBoxClosed } from "react-icons/gi";
import { IoFileTrayStacked } from "react-icons/io5";
import { FaBoxes, FaUsers } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { MdRadioButtonUnchecked,MdArrowForwardIos,MdArrowBackIos } from "react-icons/md";
const DashboardSide = () => {
    const [dashboardSideBarSize,setDashboardSideBarSize]= useState(true)
    return (
        <ul className={`menu  overflow-y-auto overflow-x-hidden bg-[#343A40] text-white relative ${dashboardSideBarSize ? "w-72 p-4" :"w-4 p-2"} `}>
            {/* side arrow */}
            <div className='bg-red-400  w-6 h-6 absolute right-0 inset-y-1/2 hidden md:flex items-center justify-center'>
                <p className='pl-2' onClick={()=>setDashboardSideBarSize(!dashboardSideBarSize) }>
                {
                    dashboardSideBarSize ?<MdArrowBackIos/>:<MdArrowForwardIos/> 
                }
                </p>
            </div>
            {/* Logo */}
            <div className='border-b border-gray-500 pb-4 mb-4'>
                <h1 className='text-4xl font-semibold px-4 uppercase'>New<span className='text-red-600'>t</span>ech</h1>
            </div>

            {/* Search */}
            <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered  bg-[#3F474E]" />
                    <button className="btn btn-square ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

            {/* Product */}
            <div className="collapse collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  peer-checked:bg-gray-700 ">
                    <p className='flex items-center font-semibold text-lg'><span className='mr-3 text-2xl'><FaBoxes /> </span> Product</p>

                </div>
                <div className="collapse-content  peer-checked:bg-gray-700 ">
                    <Link to="/dashboard"><li><a><MdRadioButtonUnchecked/> Add Product</a></li></Link>
                    <Link to="/dashboard"><li><a><MdRadioButtonUnchecked/> Product List</a></li></Link>
                    <Link to="/dashboard"><li><a><MdRadioButtonUnchecked/> Purchase</a></li></Link>
                </div>
            </div>

            {/* order */}
            <div className="collapse collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  peer-checked:bg-gray-700 ">
                    <p className='flex items-center font-semibold text-lg'><span className='mr-3 text-3xl'><GiCardboardBoxClosed /> </span> Order</p>
                </div>
                <div className="collapse-content  peer-checked:bg-gray-700 ">
                <Link to="/dashboard"><li><a><MdRadioButtonUnchecked/> Place Order</a></li></Link>
                <Link to="/dashboard"><li><a><MdRadioButtonUnchecked/> Order List</a></li></Link>
                </div>
            </div>

            {/* stack */}
            <div className="collapse collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  peer-checked:bg-gray-700 ">
                    <p className='flex items-center font-semibold text-lg'><span className='mr-3 text-xl'><IoFileTrayStacked /></span> Stock </p>
                </div>
                <div className="collapse-content  peer-checked:bg-gray-700 ">
                <Link to="/dashboard"><li><a><MdRadioButtonUnchecked/> Inventory</a></li></Link>
                <Link to="/dashboard"><li><a><MdRadioButtonUnchecked/> Stack Report</a></li></Link>
                </div>
            </div>

            {/* warehouse */}
            <div className="collapse collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  peer-checked:bg-gray-700 ">
                    <p className='flex items-center font-semibold text-lg'><span className='mr-3 text-2xl'><BsFillCartPlusFill /></span> Warehouse</p>
                </div>
                <div className="collapse-content  peer-checked:bg-gray-700 ">
                <Link to="/dashboard"><li><a><MdRadioButtonUnchecked/> Warehouse Report</a></li></Link>
                </div>
            </div>

            {/* Employee */}
            <div className="collapse collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  peer-checked:bg-gray-700 ">
                    <p className='flex items-center font-semibold text-lg'><span className='mr-3 text-2xl'><FaUsers /></span> Employee</p>
                </div>
                <div className="collapse-content  peer-checked:bg-gray-700 ">
                <Link to="/dashboard"><li><a><MdRadioButtonUnchecked/> Add Employee</a></li></Link>
                <Link to="/dashboard"><li><a><MdRadioButtonUnchecked/>Employee List</a></li></Link>
                </div>
            </div>

        </ul>
    );
};

export default DashboardSide;