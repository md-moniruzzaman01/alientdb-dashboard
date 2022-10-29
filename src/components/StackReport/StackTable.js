import React from 'react';

const StackTable = ({product , DeleteProduct}) => {
    return (
        <div className="overflow-x-auto min-h-[70vh]">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>SL No</th>
                            <th>Product Name</th>
                            <th>Brand</th>
                            <th>Total Purchase</th>
                            <th>Total Sold</th>
                            <th>In Stack</th>
                          
                        </tr>
                    </thead>
                    <tbody>

                        {
                            product && product.map((prodict, index) => <tr key={prodict._id}>
                                <th>{index + 1}</th>
                                <td>{prodict?.Product}</td>
                                <td>{prodict?.Brand}</td>
                                <td></td>
                                <td></td>
                                <td>{prodict?.qnt}</td>
                                


                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
    );
};

export default StackTable;