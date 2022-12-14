import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WarehouseTable = () => {
 const [warehouseList, setWarehouseList]=useState([])

    function refreshPage() {
        window.location.reload(false);
    }
    useEffect(() => {
        fetch("https://alientbd-servar.onrender.com/warehouse", {
        })
            .then(res => res.json())
            .then(data => {
                setWarehouseList(data);
            })
    }, [])
    
    return (
       
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>SL No.</th>
                            <th>code</th>
                            <th>warehouse locations</th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                            warehouseList && warehouseList.map((warehouse, index) => <tr key={warehouse._id}>
                                <th>{index + 1}</th>
                                <td>{warehouse.warehousecode}</td>
                                <td><Link to={`/warehouse/${warehouse.warehouseLocation}`}><p>{warehouse.warehouseLocation}</p></Link></td>
                               
                               

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
       
    );
};

export default WarehouseTable;