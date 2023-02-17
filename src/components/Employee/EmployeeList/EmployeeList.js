import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const EmployeeList = () => {
    const [Employees,setEmployees]= useState([]);
    function refreshPage() {
        window.location.reload(false);
    }
    useEffect(() => {
        fetch("http://localhost:5000/api/employee", {
        })
            .then(res => res.json())
            .then(data => {
                setEmployees(data.data);
            })
    }, [])

    // const DeleteEmpolyee = (id) => {
    //     fetch(`http://localhost:5000/remove-employee/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             authorization:`Bearer ${localStorage.getItem('tmtoken')}`
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             const confarm = window.confirm('Delete this Employee')
    //             if (confarm) {
    //                 if (data.deletedCount > 0) {
    //                     toast('Employee removed')
    //                     refreshPage()
    //                 } else {
    //                     toast('Some think wrong please try again')
    //                     // refreshPage()
    //                 }
    //             }

    //         })
    // }

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
                            <th>Email</th>
                            <th>Designation</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        Employees && Employees.map((emplyee,index)=> <tr key={emplyee._id}>
                            <th>{index + 1}</th>
                            <td>
                            <Link to={`/employee/${emplyee._id}`}>{emplyee?.fullName}</Link>
                            </td>
                            <td>{emplyee?.phoneNumber}</td>
                            <td>{emplyee?.Email}</td>
                            <td>{emplyee?.designation}</td>
                            {/* <td className=''>
                                    <div className='w-20'>
                                      
                                    </div>
                                </td> */}
                                  {/* <button onClick={() => DeleteEmpolyee(emplyee._id)} className="mx-2 btn btn-secondary text-white btn-xs">Delete</button> */}
                        </tr>)
                      }
                        
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeList;