import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import InvoiceInput from './InvoiceInput';
import PersonInChargeInput from './PersonInChargeInput';
import SelectProductForm from './SelectProductForm';
import WareHouseInput from './WareHouseInput';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { Products } from '../../App';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const PlaceOrderPage = () => {
    const navigate = useNavigate()
    const [warehouse, setWarehouse] = useState([])
    const [Employee, setEmployee] = useState([])
    const [InvoiceNumber, setInvoiceNumber] = useState([])
    const [ChooseWarehouse, setChoosedWarehouse] = useState('')
    const [orderBtn, setOrderBtn] = useState(false);
    const { user } = useContext(Products)
    useEffect(() => {
        fetch("http://localhost:5000/warehouse", {}).then(res => res.json()).then(data => setWarehouse(data));
        fetch("http://localhost:5000/employee", {}).then(res => res.json()).then(data => setEmployee(data))
        fetch("http://localhost:5000/countOrder", {}).then(res => res.json()).then(data => setInvoiceNumber(data))
    }, [])

    const InvoiceHandle = ((parseInt(InvoiceNumber.count) || 0) + 1).toString();
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), Product: '', quntity: '',_id:'' },
    ]);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    const handleSubmit = (e) => {
        e.preventDefault();
        const InChargePerson = e.target.InChargePerson.value;
        const customerName = user?.name
        const orderDetails = {InvoiceHandle,warehouseChoose:ChooseWarehouse,InChargePerson,customerName, product:inputFields,Date:today}
        fetch('http://localhost:5000/add-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderDetails),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data?.acknowledged) {
                    toast('Place order successful')
                    navigate(`/invoice/${data.insertedId}`)

                }else{
                    toast('there was error! try again')
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
                            <WareHouseInput warehouse={warehouse} setChoosedWarehouse={setChoosedWarehouse} />
                            <PersonInChargeInput Employee={Employee} />
                        </div>
                        <SelectProductForm setOrderBtn={setOrderBtn} inputFields={inputFields} setInputFields={setInputFields} ChooseWarehouse={ChooseWarehouse}/>
                        <button disabled={orderBtn} type="submit" className='btn btn-secondary'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PlaceOrderPage;