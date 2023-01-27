import React from 'react';
import AddWarehouse from './AddWarehouse';
import WarehouseTable from './WarehouseTable';

const WarehousePage = () => {
 
    return (
        <div className='pb-11'>
         <AddWarehouse/>
            <p className='text-2xl font-semibold text-gray-800 m-4'>warehouse list</p>
            <WarehouseTable/>
        </div>
    );
};

export default WarehousePage;