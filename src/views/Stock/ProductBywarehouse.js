import React from 'react';
import { useParams } from 'react-router-dom';
import ProductByWarehousePage from '../../components/Product by warehouse/ProductByWarehousePage';

const ProductBywarehouse = () => {
    const { id } = useParams()
    return (
        <div className='page px-4 py-2'>
            <ProductByWarehousePage id={id}></ProductByWarehousePage>
        </div>
    );
};

export default ProductBywarehouse;