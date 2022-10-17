import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const WarehouseTable = () => {
 const [warehouseList, setWarehouseList]=useState([])

    function refreshPage() {
        window.location.reload(false);
    }
    useEffect(() => {
        fetch("http://localhost:5000/warehouse", {
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
                                <td>{warehouse.WarehouseCode}</td>
                                <td>{warehouse.WarehouseLocation}</td>
                               
                               

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
       
    );
};

export default WarehouseTable;