import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AsyncSelect from 'react-select/async';
import { toast } from 'react-toastify';

const SelectProductForm = ({ inputFields, setInputFields, ChooseWarehouse, setOrderBtn }) => {
    const [error, setError] = useState(false)
    const [qnt, setqnt] = useState({ qnt: 0 })
    const handleQuantityValue = (id, event) => {
        const newInputFields = inputFields.map(i => {
            const quantity = parseInt(qnt);
            if (id === i.id) {
                if (quantity >= event.target.value && event.target.value > 0 ) {
                    setOrderBtn(false)
                    setError(false)
                } else {
                    setOrderBtn(true)
                    setError(true)
                }
            }
            return i;
        })
    }
    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value;
            }
            return i;
        })
        setInputFields(newInputFields);
    }

    const handleQnt = (id, event) => {
        handleChangeInput(id, event);
        handleQuantityValue(id, event)
    }
    const handleAddFields = (e) => {
        e.preventDefault();
        setInputFields([...inputFields, { id: uuidv4(), Product: '', brand: '', quntity: '', _id: '' }])
        setqnt({ qnt: 0 })
    }

    const handleRemoveFields = id => {
        const values = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }

    const onChangeSelectedOption = (e, id) => {
        const selectedOption = e.value;
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i["Product"] = selectedOption;
                i["_id"] = e.id;
                i["brand"] = e.brand;

            }
            return i;
        })
        setInputFields(newInputFields);

        fetchProductName(e.id)
    };

    const fetchProductName = (id) => {
        fetch(`http://localhost:5000/api/utils/quantity/${id}?warehouse=${ChooseWarehouse}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setqnt(data?.data?.qnt);
                }else{
                    toast(data.data)
                }
            })
    }

    // asyncselect
    const loadOptions = async (inputText, callback) => {
        const response = await fetch(`http://localhost:5000/api/utils/search-product/${ChooseWarehouse}?search=${inputText}`)
        const json = await response.json()
        callback(json.data.map(i => ({ label: i.Product + ' _ Brand - ' + i.Brand, value: i.Product, id: i._id, brand: i.Brand })))
    }
    return (
        <div className='my-4'>
            {error && <p className='text-red-600 flex justify-end text-xl font-bold'>Invalid quantity</p>}
            {
                ChooseWarehouse.length > 1 ? inputFields.map(inputField => (
                    <div className='flex' key={inputField.id}>
                        <div className='w-11/12 flex'>
                            <div className='form-control w-3/6'>
                                <label className="label font-bold">Product Name</label>
                                {/* <input type="text" placeholder="Product name.." name="firstName" value={inputField.firstName} onChange={event => handleChangeInput(inputField.id, event)} className="input input-bordered rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-400 w-full rounded-none" /> */}
                                <AsyncSelect
                                    cacheOptions
                                    loadOptions={loadOptions}
                                    defaultOptions
                                    onChange={e => onChangeSelectedOption(e, inputField.id)}

                                />
                            </div>
                            <div className='form-control w-3/12'>
                                <label className="label font-bold">Brand</label>
                                <input type="text" name='brand' value={inputField.brand} placeholder="Brand" className='input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400 w-full  rounded-none' />
                            </div>
                            <div className='form-control w-3/12'>
                                <label className="label font-bold">Quantity</label>
                                <input type="number" placeholder="Type Quantity.." name="quntity" value={inputField.quntity} onChange={event => handleQnt(inputField.id, event)} className={`input  input-bordered focus:outline-none focus:ring-1  w-full  rounded-none ${error ? 'focus:ring-red-600' : 'focus:ring-blue-400'}`} />
                            </div>

                        </div>
                        <p disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)} className='px-3 py-2.5 mb-0.5 text-xl font-semibold bg-slate-400 mt-auto text-white rounded-none rounded-r-lg'>remove</p>
                    </div>
                )) : ''
            }

            <div className='flex justify-end my-4'>
                <p className='btn btn-secondary max-w-[100px]' onClick={handleAddFields}>Add</p>
            </div>
        </div>
    );
};

export default SelectProductForm;