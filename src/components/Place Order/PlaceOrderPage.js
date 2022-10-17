import React from 'react';
import InvoiceInput from './InvoiceInput';
import PersonInChargeInput from './PersonInChargeInput';
import SelectProductForm from './SelectProductForm';
import WareHouseInput from './WareHouseInput';

const PlaceOrderPage = () => {
    return (
        <div className='bg-white min-h-[50vh] max-w-7xl mx-auto rounded' >
            <div className='m-4'>
                <div className='w-full bg-secondary h-11 text-xl font-semibold text-base-100 flex items-center px-4 rounded-t'>Product Entry</div>
                <div className="card-body px-4 md:px-7 py-0">
                    <div className='grid grid-cols-3 gap-5'>
                        <InvoiceInput />
                        <WareHouseInput />
                        <PersonInChargeInput />
                    </div>
                    <SelectProductForm />
                </div>
            </div>
        </div>
    );
};

export default PlaceOrderPage;