import React, { useContext } from 'react';
import AddWarehouse from './AddWarehouse';
import WarehouseTable from './WarehouseTable';
import { Products } from '../../App';
const WarehousePage = () => {
    const {user, setUser } = useContext(Products);
    return (
        <div className='pb-11'>
        { user?.role ==="admin" && <AddWarehouse/>}
            <p className='text-2xl font-semibold text-gray-800 m-4'>warehouse list</p>
            <WarehouseTable/>
        </div>
    );
};

export default WarehousePage;