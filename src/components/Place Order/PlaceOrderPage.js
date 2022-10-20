import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import InvoiceInput from './InvoiceInput';
import PersonInChargeInput from './PersonInChargeInput';
import SelectProductForm from './SelectProductForm';
import WareHouseInput from './WareHouseInput';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
const PlaceOrderPage = () => {
    const [warehouse, setWarehouse] = useState([])
    const [Employee, setEmployee] = useState([])
    const [InvoiceNumber, setInvoiceNumber] = useState([])
    useEffect(() => {
        fetch("https://warm-cliffs-27985.herokuapp.com/warehouse", {}).then(res => res.json()).then(data => setWarehouse(data));
        fetch("https://warm-cliffs-27985.herokuapp.com/employee", {}).then(res => res.json()).then(data => setEmployee(data))
        fetch("https://warm-cliffs-27985.herokuapp.com/countOrder", {}).then(res => res.json()).then(data => setInvoiceNumber(data))
    }, [])

    const InvoiceHandle = (parseInt(InvoiceNumber.count) || 0) + 1;


    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), ProductName: '', quntity: '' },
    ]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const warehouseChoose = e.target.warehouseChose.value
        const InChargePerson = e.target.InChargePerson.value;
        const orderDetails = {InvoiceHandle,warehouseChoose,InChargePerson, product:inputFields}
        fetch('http://localhost:5000/add-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderDetails),
        })
            .then((response) => response.json())
            .then((data) => {
               
                console.log(data);
                if (data.acknowledged) {
                    toast('employee add successfully')
                    e.target.reset();
                }
                else{
                    toast('some think wrong')
                }
            })
        
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