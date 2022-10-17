import React from 'react';
import Emtypage from '../../components/Shared/Emtypage';

const WarehouseReport = () => {
    const warehouseList = [
        {
            code: 1,
            location: 'Tower'
        },
        {
            code: 2,
            location:'Kamal'
        },
        {
            code: 3,
            location:'UTTAM'
        },
        {
            code: 4,
            location:'MASJID'
        },
        {
            code: 4,
            location:'OLD TROLLEY'
        },
        {
            code: 5,
            location:'NEW TROLLEY'
        },
        {
            code: 6,
            location:'PALTAN'
        },
        {
            code: 7,
            location:'SHAMI BUG'
        },
        {
            code: 8,
            location:'SHAMI BUG'
        },
        {
            code: 9,
            location:'BONOGRAM'
        },
        {
            code: 10,
            location:'PRESS'
        }
    ]
    return (
        <div className='page'>
            <p className='text-3xl font-semibold text-gray-800 m-4'>warehouse</p>
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
                                <td>{warehouse.code}</td>
                                <td>{warehouse.location}</td>
                               
                               

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WarehouseReport;