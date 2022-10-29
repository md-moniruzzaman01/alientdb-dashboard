import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GiCardboardBoxClosed } from "react-icons/gi";
import { IoFileTrayStacked } from "react-icons/io5";
import { FaBoxes, FaUsers } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { Products } from '../../App';

const DashboardSide = () => {
    const { dashboardSideBarSize} = useContext(Products);
    return (
        <ul className={`menu  overflow-y-auto overflow-x-hidden bg-[#343A40] text-white relative ${dashboardSideBarSize ? "w-72 p-4" : "w-72 p-4 md:w-0 md:p-0"} `}>
            {/* side arrow */}
          
            {/* Logo */}
            <div className='border-b border-gray-500 pb-4 mb-4'>
                <Link  to="/"><h1 className='text-4xl font-semibold px-4 uppercase'>New<span className='text-red-600'>t</span>ech</h1></Link>
            </div>

            {/* Search */}
            <div className="form-control">
                <div className="input-group">
                    <input type="text"  placeholder="Search…" className="input input-bordered  bg-[#3F474E]" />
                    <button className="btn btn-square ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

            {/* Product */}
            <div className="collapse overflow-visible collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  peer-checked:bg-gray-700 ">
                    <p className='flex items-center font-semibold text-lg'><span className='mr-3 text-2xl'><FaBoxes /> </span> Product</p>

                </div>
                <div className="collapse-content  peer-checked:bg-gray-700 ">
                    <Link to="/add-product"><li><MdRadioButtonUnchecked/> Add Product</li></Link>
                    <Link to="/product-list"><li><MdRadioButtonUnchecked/> Product List</li></Link>
                    <Link to="/product-purches"><li><MdRadioButtonUnchecked/> Purchase</li></Link>
                </div>
            </div>

            {/* order */}
            <div className="collapse overflow-visible collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  peer-checked:bg-gray-700 ">
                    <p className='flex items-center font-semibold text-lg'><span className='mr-3 text-3xl'><GiCardboardBoxClosed /> </span> Order</p>
                </div>
                <div className="collapse-content  peer-checked:bg-gray-700 ">
                <Link to="/place-order"><li><MdRadioButtonUnchecked/> Place Order</li></Link>
                <Link to="/oder-list"><li><MdRadioButtonUnchecked/> Order List</li></Link>
                </div>
            </div>

            {/* stack */}
            <div className="collapse overflow-visible collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  peer-checked:bg-gray-700 ">
                    <p className='flex items-center font-semibold text-lg'><span className='mr-3 text-xl'><IoFileTrayStacked /></span> Stock </p>
                </div>
                <div className="collapse-content  peer-checked:bg-gray-700 ">
                <Link to="/inventory"><li><MdRadioButtonUnchecked/> Inventory</li></Link>
                <Link to="/stock-report"><li><MdRadioButtonUnchecked/> Stock Report</li></Link>
                </div>
            </div>

            {/* warehouse */}
            <div className="collapse overflow-visible collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  peer-checked:bg-gray-700 ">
                    <p className='flex items-center font-semibold text-lg'><span className='mr-3 text-2xl'><BsFillCartPlusFill /></span> Warehouse</p>
                </div>
                <div className="collapse-content  peer-checked:bg-gray-700 ">
                <Link to="/warehouse-report"><li><MdRadioButtonUnchecked/> Warehouse Report</li></Link>
                </div>
            </div>

            {/* Employee */}
            <div className="collapse overflow-visible collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  peer-checked:bg-gray-700 ">
                    <p className='flex items-center font-semibold text-lg'><span className='mr-3 text-2xl'><FaUsers /></span> Employee</p>
                </div>
                <div className="collapse-content  peer-checked:bg-gray-700 ">
                <Link to="/add-employee"><li><MdRadioButtonUnchecked/> Add Employee</li></Link>
                <Link to="/employee-list"><li><MdRadioButtonUnchecked/>Employee List</li></Link>
                </div>
            </div>

        </ul>
    );
};

export default DashboardSide;