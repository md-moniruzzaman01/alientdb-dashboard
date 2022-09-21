import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import DashboardSide from '../Dashboard/DashboardSide';
import MainNavBar from './Navigationbar/MainNavBar';


const DashboardLayout = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="bashboard-drower" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                
                   <MainNavBar></MainNavBar>
                <Outlet />


                </div>
                <div className="drawer-side">
                    <label htmlFor="bashboard-drower" className="drawer-overlay"></label>
                    <DashboardSide></DashboardSide>

                </div>
            </div>
           
     
   
        </div>
    );
};

export default DashboardLayout;