import React from 'react';
import { useEffect } from 'react';
import PaginationPage from '../Shared/PaginationPage';
import WarehouseProductTable from './WarehouseProductTable';

const ProductList = ({ product, DeleteProduct, setCurrentPage,size, url,setProductCount,productCount,pageCount,setPageCount,id }) => {
    
    useEffect(() => {
        fetch(url, {
        })
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                setProductCount(count)
                const pages = Math.ceil(count / size)
                setPageCount(pages)
            })
            
    }, [size,url])
    return (
        <div>
            <WarehouseProductTable product={product} id={id}/>
            <PaginationPage pageCount={pageCount} productCount={productCount} setCurrentPage={setCurrentPage} size={size}/>
        </div>
    );
};

export default ProductList;