import React from 'react';
import EmployeeList from './EmployeeList';

const EmployeeListpage = () => {
    return (
        <div className='bg-white min-h-[50vh] max-w-7xl mx-auto rounded' >
        <div className='m-4'>
            <div className='w-full bg-secondary h-11 text-xl font-semibold text-base-100 flex items-center px-4 rounded-t'>Employee List</div>
            <EmployeeList/>
        </div>
    </div>
    );
};

export default EmployeeListpage;