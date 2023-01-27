import React from 'react';
import PaginationPage from '../Shared/PaginationPage';
import StackTable from './StackTable';

const StackReportList = ({ product, DeleteProduct, setCurrentPage,size,productCount,pageCount}) => {

    return (
        <div>
             <StackTable product={product} DeleteProduct={DeleteProduct}/>
            <PaginationPage pageCount={pageCount} productCount={productCount} setCurrentPage={setCurrentPage} size={size}/>
        </div>
    );
};

export default StackReportList;