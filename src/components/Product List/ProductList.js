import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import PaginationPage from '../Shared/PaginationPage';
import ProductTable from './ProductTable';

const ProductList = ({ product, DeleteProduct, setCurrentPage,size, url,setProductCount,productCount,pageCount,setPageCount,Deleteall }) => {
    
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
            <div onClick={()=> Deleteall()}>delete all</div>
            <ProductTable product={product} DeleteProduct={DeleteProduct}/>
            <PaginationPage pageCount={pageCount} productCount={productCount} setCurrentPage={setCurrentPage} size={size}/>
        </div>
    );
};

export default ProductList;