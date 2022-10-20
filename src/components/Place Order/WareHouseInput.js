import React from 'react';

const WareHouseInput = ({warehouse}) => {
    const WarehouseList = warehouse && warehouse.map((wh, i )=> <option key={i}>{wh.WarehouseLocation}</option>)
    return (
        <div className='form-control w-full max-w-xs'>
            <label className="label font-bold">Warehouse</label>
            <select className="select w-full max-w-xs select-bordered select-info" name='warehouseChose' required>
                {WarehouseList}
            </select>
        </div>
    );
};

export default WareHouseInput;