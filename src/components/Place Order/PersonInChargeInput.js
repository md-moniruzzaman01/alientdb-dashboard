import React from 'react';

const PersonInChargeInput = ({Employee}) => {
    console.log(Employee);
    const EmployeeList = Employee && Employee.map((em, i )=> <option key={i}>{em.fullName}</option>)
    return (
        <div className='form-control w-full max-w-xs'>
            <label className="label font-bold">Person in Charge</label>
            <select className="select w-full select-bordered select-info" name='InChargePerson' required>
            {/* <option disabled selected >select person</option> */}
                {EmployeeList}
            </select>
        </div>
    );
};

export default PersonInChargeInput;