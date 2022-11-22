import React from 'react';
import { useParams } from 'react-router-dom';
import EditProductBox from '../../components/product/Edit/EditProductBox';

const ProductEditPage = () => {
    const { id,warehouse } = useParams()
    return (
        <div className='page px-4 py-2'>
            <EditProductBox id={id}/>
        </div>
    );
};

export default ProductEditPage;