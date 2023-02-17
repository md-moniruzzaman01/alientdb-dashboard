import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Notification from '../../components/Shared/Notification';
const EmployeeDetails = () => {
    const { id } = useParams()
    const [emplyee, setEmplyee] = useState([])
    const [fetchData, setFetchData] = useState(null)
    let Alart;
    useEffect(() => {
        fetch(`http://localhost:5000/api/employee/${id}`, {
        })
            .then(res => res.json())
            .then(data => {
                if (data?.success) {
                    setEmplyee(data.data)
                } else {
                    setFetchData(data)
                }
            })
    }, [id])
    if (fetchData?.success === false) {
        Alart = <Notification
            status='open'
            veriant='false'
            IsReload={false}
            title="Error found"
            message={fetchData?.message}
        />
    }
    return (
        <div>
    
             <div className='flex justify-center mt-20'><p className='text-8xl'><FaUserCircle /></p> </div>
             <p className='text-center mt-4 text-xl'>Name: {emplyee?.fullName}</p>
            { Alart }
        </div >
    );
};

export default EmployeeDetails;