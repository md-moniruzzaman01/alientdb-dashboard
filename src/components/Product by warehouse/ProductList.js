import React from 'react';
import { useEffect } from 'react';
import PaginationPage from '../Shared/PaginationPage';
import WarehouseProductTable from './WarehouseProductTable';

const ProductList = ({ product, DeleteProduct,warehouseLocation,setCurrentPage,size,productCount,pageCount }) => {
    
    return (
        <div>
            <WarehouseProductTable product={product} warehouseLocation={warehouseLocation}/>
            <PaginationPage pageCount={pageCount} productCount={productCount} setCurrentPage={setCurrentPage} size={size}/>
        </div>
    );
};

export default ProductList;