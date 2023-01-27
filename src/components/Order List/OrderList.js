import React from 'react';
import PaginationPage from '../Shared/PaginationPage';
import OrderTable from './OrderTable';

const OrderList = ({orders, setCurrentPage,size,productCount,pageCount}) => {

    return (
        <div>
            <OrderTable orders={orders}/>
            <PaginationPage pageCount={pageCount} productCount={productCount} setCurrentPage={setCurrentPage} size={size}/>
        </div>
    );
};

export default OrderList;