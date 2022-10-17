import React from 'react';
import PlaceOrderPage from '../../components/Place Order/PlaceOrderPage';
import Emtypage from '../../components/Shared/Emtypage'
const PlaceOrder = () => {
    const InputStyle = "input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400 w-full  md:w-28 lg:w-32 xl:w-44  max-w-xs rounded-none"
    return (
        <div className='page'>
            <p className='text-3xl font-semibold text-gray-800 m-4'>Product List</p>
            <PlaceOrderPage/>
        </div>
    );
};

export default PlaceOrder;