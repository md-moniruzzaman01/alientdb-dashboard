import React, { useContext } from 'react';
import { Products } from '../../../App';
import { FaBell } from "react-icons/fa";
import { toast } from 'react-toastify';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
const MainNavBar = () => {
    const { user, setUser, dashboardSideBarSize, setDashboardSideBarSize } = useContext(Products)
    function refreshPage() {
        window.location.reload(false);
    }
    const LogOut = () => {
        window.localStorage.removeItem('token');
        toast('logout from system');
        refreshPage()
    }
    // <div className='bg-red-400  w-6 h-6 absolute right-0 inset-y-1/2 hidden md:flex items-center justify-center'>
    //     <p className='pl-2' onClick={() => setDashboardSideBarSize(!dashboardSideBarSize)}>
    //         {
    //             dashboardSideBarSize ? <MdArrowBackIos /> : <MdArrowForwardIos />
    //         }
    //     </p>
    // </div>
    return (
        <div>
            <nav className='w-full md:flex px-0 md:px-4 py-1 min-h-[60px]'>
                <div className="flex items-center justify-between cursor-pointer w-full">


                    <label htmlFor="bashboard-drower" className="btn btn-ghost lg:hidden text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div className='flex items-center'>
                        <label onClick={() => setDashboardSideBarSize(!dashboardSideBarSize)} className="btn btn-ghost hidden md:flex text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <div className='text-gray-700 flex items-center'>

                            <h1 className='font-bold text-2xl ml-2'>Dashboard</h1>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="input-group  justify-end hidden md:flex ">
                            <input type="text" disabled placeholder="Search…" className="input input-bordered w-96 focus:outline-none" />
                            <button className="btn btn-square bg-slate-300 text-white border-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>






                        <div className='ml-4 mr-11 relative'>
                            <button className="btn btn-ghost border border-gray-200 rounded-full text-xl px-3.5"><FaBell /></button>
                            <sup className="badge badge-primary absolute top-0 right-[-25px]">+99</sup>
                        </div>
                        <div className="dropdown dropdown-end flex items-center  w-auto  justify-end">



                            <label tabIndex={0} className="flex ">

                                <div className=" bg-slate-200 relative btn btn-ghost btn-circle avatar ">
                                    <div className="avatar online placeholder">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-11 h-11">
                                            <span className="text-xl">{user?.name?.slice(0, 2)}</span>
                                        </div>
                                    </div>

                                    {/* <img src={avater} className='h-11 rounded-full border-2 border-white' alt="Gregg" /> */}

                                </div>
                                {/* <div className="items-center text-primary text-left font-medium hidden md:flex pl-2">
                                    f
                                </div> */}
                            </label>
                            <div className=''>
                                <ul tabIndex={0} className="mt-7 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-gray-800">
                                    <li>
                                        <a className='w-full text-center flex justify-center text-xl font-semibold '>
                                            {user?.name}

                                        </a>
                                    </li>
                                    <li><p>Settings</p></li>
                                    <li><p onClick={() => LogOut()}>Logout</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </nav>
        </div>
    );
};

export default MainNavBar;