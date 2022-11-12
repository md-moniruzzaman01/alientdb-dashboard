import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderTable = ({product}) => {
    const navigate = useNavigate()
    const ViewInvoiceHandle = (id) => navigate(`/invoice/${id}`)
    return (
        <div>
            <div className="overflow-x-auto min-h-[70vh]">
                <table className="table table-zebra w-full text-center">

                    <thead>
                        <tr>
                            <th>Invoice No.</th>
                            <th>Date</th>
                            <th>Warehouse</th>
                            <th>Person In Charge</th>
                            <th>Functions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            product && product.map((prodict, index) => <tr key={prodict._id}>
                                <th>{prodict?.InvoiceHandle}</th>
                                <td>12/11/2022</td>
                                <td>{prodict?.warehouseChoose}</td>
                                <td>{prodict?.InChargePerson}</td>
                                
                                <td>


                                    <div className="z-40 ">
                                      <button className='btn btn-sm btn-success text-base-100 rounded-sm'  onClick={()=>ViewInvoiceHandle(prodict._id)}>view</button>
                                      {/* <button className='btn btn-sm btn-warning rounded-sm'>Edit</button>
                                      <button className='btn btn-sm btn-error text-base-100 rounded-sm' onClick={()=> DeleteOrder(prodict._id)} >Delete</button> */}
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

export default OrderTable;