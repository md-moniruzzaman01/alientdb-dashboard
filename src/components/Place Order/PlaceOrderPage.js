import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import InvoiceInput from './InvoiceInput';
import PersonInChargeInput from './PersonInChargeInput';
import SelectProductForm from './SelectProductForm';
import WareHouseInput from './WareHouseInput';
import { v4 as uuidv4 } from 'uuid';
const PlaceOrderPage = () => {
    const [warehouse, setWarehouse] = useState([])
    const [Employee, setEmployee] = useState([])
    const [InvoiceNumber, setInvoiceNumber] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/warehouse", {}).then(res => res.json()).then(data => setWarehouse(data));
        fetch("http://localhost:5000/employee", {}).then(res => res.json()).then(data => setEmployee(data))
        fetch("http://localhost:5000/countOrder", {}).then(res => res.json()).then(data => setInvoiceNumber(data))
    }, [])

    const InvoiceHandle = (parseInt(InvoiceNumber.count) || 0) + 1;


    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), firstName: '', lastName: '' },
    ]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const warehouseChoose = e.target.warehouseChose.value
        const InChargePerson = e.target.InChargePerson.value
        const orderDetails = {InvoiceHandle,warehouseChoose,InChargePerson, product:inputFields}
        console.log(orderDetails);
    };

    return (
        <div className='bg-white min-h-[50vh] max-w-7xl mx-auto rounded' >
            <div className='m-4'>
                <div className='w-full bg-secondary h-11 text-xl font-semibold text-base-100 flex items-center px-4 rounded-t'>Product Entry</div>
                <form onSubmit={handleSubmit}>
                    <div className="card-body px-4 md:px-7 py-0">
                        <div className='grid grid-cols-3 gap-5'>
                            <InvoiceInput InvoiceNumber={InvoiceHandle} />
                            <WareHouseInput warehouse={warehouse} />
                            <PersonInChargeInput Employee={Employee} />
                        </div>
                        <SelectProductForm inputFields={inputFields} setInputFields={setInputFields} />
                        <button type="submit" className='btn btn-secondary'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PlaceOrderPage;