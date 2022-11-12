import React, { useEffect } from 'react';
import PaginationPage from '../Shared/PaginationPage';
import OrderTable from './OrderTable';

const OrderList = ({ product, setCurrentPage,size,url, setProductCount,productCount,pageCount,setPageCount }) => {
    useEffect(() => {
        fetch(url, {
        })
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                console.log(count);
                setProductCount(count)
                const pages = Math.ceil(count / size)
                setPageCount(pages)
            })
            
    }, [size,url])
    return (
        <div>
            <OrderTable product={product}/>
            <PaginationPage pageCount={pageCount} productCount={productCount} setCurrentPage={setCurrentPage} size={size}/>
        </div>
    );
};

export default OrderList;