import React from 'react';

const WareHouseInput = ({warehouse,setChoosedWarehouse}) => {
    const WarehouseList = warehouse && warehouse.map((wh, i )=> <option key={i}>{wh.warehouseLocation}</option>)
    return (
        <div className='form-control w-full max-w-xs'>
            <label className="label font-bold">Warehouse</label>
            <select onClick={(e)=>setChoosedWarehouse(e.target.value)} className="select w-full max-w-xs select-bordered select-info" name='warehouseChose'>
            <option disabled selected >Choose You warehouse</option>
                {WarehouseList}
            </select>
        </div>
    );
};

export default WareHouseInput;