import React from 'react';
import { useNavigate } from 'react-router-dom';
const WarehouseProductTable = ({ product, warehouseLocation }) => {
    const navigate = useNavigate()
    const ViewInvoiceHandle = (_id) => navigate(`/purches-product-edit/${_id}`)
    return (
        <>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>SL No</th>
                            <th>Product Name</th>
                            <th>Brand</th>
                            <th>Quantity</th>
                            {/* <th>Function</th> */}

                        </tr>
                    </thead>
                    <tbody>

                        {
                            product && product.map((prodict, index) => <tr key={prodict._id}>
                                <th>{index + 1}</th>
                                <td>{prodict.Product}</td>
                                <td>{prodict.Brand}</td>
                                {

                                    prodict.warehouse.map((pd, i) => {
                                        return pd.houseName === warehouseLocation && <td key={i}>{prodict?.qnt}</td>
                                    }
                                    )

                                }

                                {/* <td onClick={()=>ViewInvoiceHandle(prodict._id)}>Edit</td> */}
                                {/* <td >Edit</td> */}
                            </tr>)

                        }
                    </tbody>


                </table>
            </div>


        </>
    );
};

export default WarehouseProductTable;