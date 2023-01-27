import React from 'react';
import { useEffect } from 'react';
import PaginationPage from '../Shared/PaginationPage';
import InventoryTable from './InventoryTable';

const InventoryList = ({ product, DeleteProduct, setCurrentPage,size,productCount,pageCount}) => {
     
    return (
        <div>
            <InventoryTable product={product} DeleteProduct={DeleteProduct}/>
            <PaginationPage pageCount={pageCount} productCount={productCount} setCurrentPage={setCurrentPage} size={size}/>
        </div>
    );
};

export default InventoryList;