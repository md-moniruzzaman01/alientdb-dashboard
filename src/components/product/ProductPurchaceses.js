import React from 'react';
import Form from './Form';
import UploadCSVfile from './UploadCSVfile';

const productPurchaceses = () => {

    return (
        <div className='max-w-6xl mx-auto'>
            <div className='flex justify-between m-4 items-center'>
                <p className='text-3xl font-semibold text-gray-800 '>Purchase</p>
                <UploadCSVfile />
            </div>
            <div className='flex flex-col items-center w-full'>
                <div className='w-9/12 flex justify-between  m-2 max-w-4xl xl:max-w-6xl'>
                    <p>Product Name</p>
                    <p>Description</p>
                    <p>Quantity</p>
                    <p>Warehouse</p>
                </div>
                <Form />
            </div>
        </div>
    );
};

export default productPurchaceses;