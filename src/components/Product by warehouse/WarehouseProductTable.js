import React from 'react';
import { useNavigate } from 'react-router-dom';
const WarehouseProductTable = ({ product, id}) => {
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
                            
                        </tr>
                    </thead>
                    <tbody>

                        {
                            product && product.map((prodict, index) => <tr key={prodict._id}>
                                <th>{index + 1}</th>
                                <td>{prodict.Product}</td>
                                <td>{prodict.Brand}</td>
                                {
                                    
                                    prodict.warehouse.map((pd, i) =>{
                                      return  pd.houseName === id && <td key={i}>{pd?.qnt}</td>}
                                   )
                                    
                                }

                            </tr>)
                        }
                    </tbody>


                </table>
            </div>


        </>
    );
};

export default WarehouseProductTable;