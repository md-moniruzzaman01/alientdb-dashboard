import React from 'react';
import { Link, Outlet } from 'react-router-dom';
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
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
                       
                        
                       <Link to="/"><li><a>Sidebar Item 1</a></li></Link> 
                       <Link to="/dashboard"><li><a>Sidebar Item 2</a></li></Link> 
                    </ul>

                </div>
            </div>
           
     
   
        </div>
    );
};

export default DashboardLayout;