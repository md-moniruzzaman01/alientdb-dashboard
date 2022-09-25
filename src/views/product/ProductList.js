import React from 'react';
import Emtypage from '../../components/Shared/Emtypage';

const ProductList = () => {
    return (
        <div className='page'>
             <p className='text-3xl font-semibold text-gray-800 m-4'>Product List</p>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Unit</th>
                            <th>Brand</th>
                            <th>Reminder Quantity</th>
                            <th>functions</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td>Blue</td>
                        </tr>
                        
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                            <td>Purple</td>
                            <td>Purple</td>
                        </tr>
                        
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                            <td>Red</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;