import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import InvoiceInput from './InvoiceInput';
import PersonInChargeInput from './PersonInChargeInput';
import SelectProductForm from './SelectProductForm';
import WareHouseInput from './WareHouseInput';
import { v4 as uuidv4 } from 'uuid';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useGetFetch from '../../hooks/useGetFetch';
const PlaceOrderPage = () => {
    const navigate = useNavigate()
    const [InvoiceNumber, setInvoiceNumber] = useState(0)
    const [ChooseWarehouse, setChoosedWarehouse] = useState('')
    const [orderBtn, setOrderBtn] = useState(false);
    const [user, loading, error] = useAuthState(auth);

    const  [warehouse,setWarehouse, warehouseError, warehouseState]=  useGetFetch("http://localhost:5000/api/warehouse");
    const  [Employee,setEmployee, userError,userState]=  useGetFetch("http://localhost:5000/api/user");

    useEffect(() => {
        fetch("http://localhost:5000/api/order", {})
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                setInvoiceNumber(data.count)
            }else{
                toast(data.message)
            }
        })
    }, [])

    const InvoiceHandle = ((parseInt(InvoiceNumber) || 0) + 1).toString();
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), Product: '', quntity: 0,_id:'' },
    ]);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    const handleSubmit = (e) => {
        e.preventDefault();
        const InChargePerson = e.target.InChargePerson.value;
        const customerName = user?.displayName
        const orderDetails = {InvoiceHandle,warehouseChoose:ChooseWarehouse,InChargePerson,customerName, product:inputFields,Date:today}
        fetch('http://localhost:5000/api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderDetails),
        })
            .then((response) => response.json())
            .then((data) => {
           console.log(data);
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
                        {userError && <p className='text-red-600 font-bold'>{userError}</p>}
                        {warehouseError && <p className='text-red-600 font-bold'>{warehouseError}</p>}
                        <SelectProductForm setOrderBtn={setOrderBtn} inputFields={inputFields} setInputFields={setInputFields} ChooseWarehouse={ChooseWarehouse}/>
                        <button disabled={orderBtn} type="submit" className='btn btn-secondary'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PlaceOrderPage;