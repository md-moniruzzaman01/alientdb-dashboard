import React, { useContext, useEffect, useState } from 'react';
import { Products } from '../../../App';
import { FaBell } from "react-icons/fa";
import { toast } from 'react-toastify';
import { AiFillSetting } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import LoadingScreen2 from '../LoadingScreen2';
import Reload from '../../utils/functions/Reload';
const MainNavBar = () => {
    const { dashboardSideBarSize, setDashboardSideBarSize } = useContext(Products);
    const [user] = useAuthState(auth);
    const [signOut, loading, error] = useSignOut(auth);
    const navigate = useNavigate()
    const [productCount, setProductCount] = useState(0)
    const url = "https://alientbd-version-2.onrender.com/api/utils/"


    const LogOut = async () => {
        await window.localStorage.removeItem('token');
        await signOut()
        Reload()
        toast('logout from system');
    }

    const handleSettingBtn = (id) => navigate(`/setting`)
    useEffect(() => {
        fetch(url, {
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const count = data.count;
                    setProductCount(count)
                } else {
                    toast(data.data)
                }

            })
    }, [])
    if (loading) {
        return <LoadingScreen2 />
    }
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

                    </div>

                    <div className="flex">
                        {/* <div className="input-group  justify-end hidden md:flex ">
                            <input type="text" disabled placeholder="Search…" className="input input-bordered w-96 focus:outline-none" />
                            <button className="btn btn-square bg-slate-300 text-white border-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div> */}



                        <div className=' btn btn-ghost border bg-slate-50 rounded-full text-xl px-2.5' onClick={handleSettingBtn}>
                            <p className='text-3xl'><AiFillSetting /></p>
                        </div>
                        <div className='ml-4 mr-11 relative'>
                            {/* The button to open modal */}
                            <label htmlFor="remainder" className="btn btn-ghost border border-gray-200 rounded-full text-xl px-3.5"><FaBell /></label>

                            <sup className="badge badge-primary absolute top-0 right-[-25px]">{productCount}</sup>
                        </div>
                        <div className="dropdown dropdown-end flex items-center  w-auto  justify-end">



                            <label tabIndex={0} className="flex ">

                                <div className=" bg-slate-200 relative btn btn-ghost btn-circle avatar ">
                                    <div className="avatar online placeholder">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-11 h-11">
                                            <span className="text-xl">{user?.displayName?.slice(0, 2)}</span>
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
                                            {user?.displayName}

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