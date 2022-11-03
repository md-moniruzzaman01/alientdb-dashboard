import React from 'react';
import { useParams } from 'react-router-dom';
import PurchesProductEdit from '../../components/product/Edit/PurchesProductEdit';

const PurchesEdit = () => {
    const { id } = useParams()
    return (
        <div className='page'>
            <PurchesProductEdit id={id}></PurchesProductEdit>
        </div>
    );
};
export default PurchesEdit;