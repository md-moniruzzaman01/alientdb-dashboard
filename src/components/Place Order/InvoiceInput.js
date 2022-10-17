import React from 'react';
const InvoiceInput = ({InvoiceNumber}) => {
    console.log();
    return (
        <div className='form-control w-full max-w-xs'>
            <label className="label font-bold">Invoice No</label>
            <select className="select w-full max-w-xs select-bordered select-info" disabled>
                <option disabled selected>{InvoiceNumber}</option>

            </select>
        </div>
    );
};

export default InvoiceInput;