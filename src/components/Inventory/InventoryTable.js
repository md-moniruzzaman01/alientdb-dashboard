import React from 'react';

const InventoryTable = ({product,DeleteProduct}) => {
    return (
        <div className="overflow-x-auto min-h-[70vh]">
            <table className="table table-zebra w-full">

                <thead>
                    <tr>
                        <th>SL No</th>
                        <th>Product Name</th>
                        <th>Brand</th>
                        <th>Quantity</th>
                        <th>Warehouse</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        product && product.map((prodict, index) => <tr key={prodict._id}>
                            <th>{index + 1}</th>
                            <td>{prodict?.ProductName}</td>
                            <td>{prodict?.Brand}</td>
                            <td>{prodict?.Quantity}</td>
                            <td>


                                <div className="z-40 ">
                                    {
                                        prodict.warehouse && prodict?.warehouse.map((pd, i) => {
                                            return <p key={i} >{pd?.houseName}</p>

                                        })
                                    }
                                </div>

                            </td>


                        </tr>)
                    }
                </tbody>


            </table>
        </div>
    );
};

export default InventoryTable;