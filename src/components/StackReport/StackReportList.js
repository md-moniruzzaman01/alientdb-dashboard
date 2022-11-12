import React from 'react';
import { useEffect } from 'react';
import PaginationPage from '../Shared/PaginationPage';
import StackTable from './StackTable';

const StackReportList = ({ product, DeleteProduct, setCurrentPage,size, url,setProductCount,productCount,pageCount,setPageCount }) => {
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
             <StackTable product={product} DeleteProduct={DeleteProduct}/>
            <PaginationPage pageCount={pageCount} productCount={productCount} setCurrentPage={setCurrentPage} size={size}/>
        </div>
    );
};

export default StackReportList;