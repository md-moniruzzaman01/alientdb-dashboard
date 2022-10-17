import React from 'react';

const PersonInChargeInput = () => {
    return (
        <div className='form-control w-full max-w-xs'>
            <label className="label font-bold">Person in Charge</label>
            <select className="select w-full select-bordered select-info">
                <option disabled selected>Select person in charge</option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
            </select>
        </div>
    );
};

export default PersonInChargeInput;