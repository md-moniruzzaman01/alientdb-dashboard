import React from 'react';

const PersonInChargeInput = ({Employee}) => {
    const EmployeeList = Employee && Employee.map((em, i )=> <option key={i}>{em.EmployeeName}</option>)
    return (
        <div className='form-control w-full max-w-xs'>
            <label className="label font-bold">Person in Charge</label>
            <select className="select w-full select-bordered select-info" name='InChargePerson'>
                <option disabled selected>Select person in charge</option>
                {EmployeeList}
            </select>
        </div>
    );
};

export default PersonInChargeInput;