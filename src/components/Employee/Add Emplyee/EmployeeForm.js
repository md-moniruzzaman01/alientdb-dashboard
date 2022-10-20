import React, { useState } from 'react';
import { toast } from 'react-toastify';
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from 'react-datepicker';
const EmployeeForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleAddEmployeeForm = (e) => {
        e.preventDefault();
        const EmployeeName = e.target.name.value;
        const EmployeeNumber = e.target.number.value;
        const Employeedata = e.target.dataOfbirth.value;
        const Employeedesignation = e.target.designation.value;
        const EmployeeUserName = e.target.userName.value;
        const EmployeeNidNumber = e.target.NidNumber.value;
        const EmployeePassword = e.target.password.value;
        const EmployeeData = {EmployeeName, EmployeeNumber, Employeedata,Employeedesignation,EmployeeNidNumber,EmployeeUserName,EmployeePassword}


        
        fetch('http://localhost:5000/add-employee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(EmployeeData),
        })
            .then((response) => response.json())
            .then((data) => {
               
                console.log(data);
                if (data.status) {
                    toast('employee add successfully')
                    e.target.reset();
                }else if(data.error){
                    toast(data.error)
                }else if(data.addEmpoloyee == "ok"){
                    toast('Employee added succesfully')
                }
                else{
                    toast('some think wrong')
                }
            })
       
    }

    return (
        <div>
            <form onSubmit={handleAddEmployeeForm}>


                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Employee Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Number</span>
                        </label>
                        <input type="text" name='number' placeholder="number" className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">date of birth</span>
                        </label>
                        <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400 w-full" name="dataOfbirth"/>
                    </div>
                    <div className="form-control flex">
                        <label className="label">
                            <span className="label-text font-bold">Designation</span>
                        </label>
                        <select name='designation'  className="mr-4 select w-20 select-bordered select-sm">
                            <option value="staff">Staff</option>
                            <option value="admin">Admin</option>
                       
                        </select>
                    </div>

                    <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">National ID</span>
                            </label>
                            <input type="number" name='NidNumber' placeholder="Type nation card number here.." className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400" />
                        </div>
                    <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">User Name</span>
                            </label>
                            <input type="text" name='userName' placeholder="Type you name here.." className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400" />
                        </div>
                    <div className="form-control">
                            <label className="label py-2">
                                <span className="label-text font-semibold text-lg">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="Password here..." className="input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400" />
                        </div>


                    <div className="form-control mt-6">
                        <button type="submit" className='btn btn-primary'>Submit</button>
                    </div>
                </div>
            </form>



        </div>

    );
};

export default EmployeeForm;