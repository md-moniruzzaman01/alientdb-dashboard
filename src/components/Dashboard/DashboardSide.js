import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GiCardboardBoxClosed } from "react-icons/gi";
import { IoFileTrayStacked } from "react-icons/io5";
import { FaBoxes, FaUsers } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { Products } from '../../App';
import LOGO from '../../image/alient_logo.png'
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LoadingScreen2 from '../Shared/LoadingScreen2';
const DashboardSide = () => {
    const { dashboardSideBarSize, copyright } = useContext(Products);
    const [user] = useAuthState(auth);
    const [admin, power, adminLoading] = useAdmin(user);
    if (adminLoading) {
        return <LoadingScreen2></LoadingScreen2>
    }
    return (
        <ul className={`menu  overflow-y-auto overflow-x-hidden bg-[#343A40] text-white relative ${dashboardSideBarSize ? "w-72 p-4" : "w-72 p-4 md:w-0 md:p-0"} `}>
            {/* side arrow */}

            {/* Logo */}
            <div className='flex justify-center items-center'>
                <Link to="/"><img className='py-2 h-28' src={LOGO} alt="Alientbd Logo" /></Link>
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
            <div className="collapse overflow-visible collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  peer-checked:bg-gray-700 ">
                    <p className='flex items-center font-semibold text-lg'><span className='mr-3 text-2xl'><FaBoxes /> </span> Product</p>

                </div>
                <div className="collapse-content  peer-checked:bg-gray-700 ">
                    {(admin || power.ProductAdd) && <Link to="/add-product"><li><a><MdRadioButtonUnchecked /> Add Product</a></li></Link>}
                    {admin && <Link to="/product-list"><li><a><MdRadioButtonUnchecked />Product List</a></li></Link>}
                    {(admin || power.purches) && <Link to="/product-purches"><li><a><MdRadioButtonUnchecked /> Purchase</a></li></Link>}
                </div>
            </div>

            {/* order */}
            <div className="collapse overflow-visible collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  peer-checked:bg-gray-700 ">
                    <p className='flex items-center font-semibold text-lg'><span className='mr-3 text-3xl'><GiCardboardBoxClosed /> </span> Order</p>
                </div>
                <div className="collapse-content  peer-checked:bg-gray-700 ">
                    <Link to="/place-order"><li><a><MdRadioButtonUnchecked /> Place Order</a></li></Link>
                    {(admin || power?.orderlist) && <Link to="/oder-list"><li><a><MdRadioButtonUnchecked /> Order List<a></a></a></li></Link>}
                </div>
            </div>

            {/* stack */}
            <div className="collapse overflow-visible collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  peer-checked:bg-gray-700 ">
                    <p className='flex items-center font-semibold text-lg'><span className='mr-3 text-xl'><IoFileTrayStacked /></span> Stock </p>
                </div>
                <div className="collapse-content  peer-checked:bg-gray-700 ">
                    <Link to="/inventory"><li><a><MdRadioButtonUnchecked /> Inventory</a></li></Link>
                    <Link to="/stock-report"><li><a><MdRadioButtonUnchecked /> Stock Report</a></li></Link>
                </div>
            </div>

            {/* warehouse */}
            <div className="collapse overflow-visible collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  peer-checked:bg-gray-700 ">
                    <p className='flex items-center font-semibold text-lg'><span className='mr-3 text-2xl'><BsFillCartPlusFill /></span> Warehouse</p>
                </div>
                <div className="collapse-content  peer-checked:bg-gray-700 ">
                    <Link to="/warehouse-report"><li><a><MdRadioButtonUnchecked /> Warehouse Report</a></li></Link>
                </div>
            </div>

            {/* Employee */}
            {admin && <div className="collapse overflow-visible collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  peer-checked:bg-gray-700 ">
                    <p className='flex items-center font-semibold text-lg'><span className='mr-3 text-2xl'><FaUsers /></span> Employee</p>
                </div>
                <div className="collapse-content  peer-checked:bg-gray-700 ">

                    <Link to="/add-employee"><li><a><MdRadioButtonUnchecked /> Add Employee</a></li></Link>
                    <Link to="/employee-list"><li><a><MdRadioButtonUnchecked />Employee List</a></li></Link>
                </div>
            </div>}
            <p className='mt-auto test-sm text-center'>&#169; {copyright}</p>
            
        </ul>
    );
};

export default DashboardSide;