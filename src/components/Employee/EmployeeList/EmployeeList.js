import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const EmployeeList = () => {
    const [Employees,setEmployees]= useState([]);
    function refreshPage() {
        window.location.reload(false);
    }
    useEffect(() => {
        fetch("http://localhost:5000/employee", {
        })
            .then(res => res.json())
            .then(data => {
                setEmployees(data);
            })
    }, [])

    const DeleteEmpolyee = (id) => {
        fetch(`http://localhost:5000/remove-employee/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const confarm = window.confirm('Delete this Employee')
                if (confarm) {
                    if (data.deletedCount > 0) {
                        toast('Employee removed')
                        refreshPage()
                    } else {
                        toast('Some think wrong please try again')
                        refreshPage()
                    }
                }

            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>phone</th>
                            <th>function</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        Employees && Employees.map((emplyee,index)=> <tr key={emplyee._id}>
                            <th>{index + 1}</th>
                            <td>{emplyee?.EmployeeName}</td>
                            <td>{emplyee?.EmployeeNumber}</td>
                            <td className=''>
                                    <div className='w-20'>
                                        <button className="btn btn-secondary text-white btn-xs">Edit</button>
                                        <button onClick={() => DeleteEmpolyee(emplyee._id)} className="mx-2 btn btn-secondary text-white btn-xs">Delete</button>
                                    </div>
                                </td>
                        </tr>)
                      }
                        
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeList;