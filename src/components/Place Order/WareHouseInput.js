import React from 'react';

const WareHouseInput = () => {
    return (
        <div className='form-control w-full max-w-xs'>
            <label className="label font-bold">Warehouse</label>
            <select className="select w-full max-w-xs select-bordered select-info">
                <option disabled selected>Choose you favorite warehouse..</option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
            </select>
        </div>
    );
};

export default WareHouseInput;