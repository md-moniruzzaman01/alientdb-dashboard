import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AsyncSelect from 'react-select/async';

const SelectProductForm = ({ inputFields, setInputFields, ChooseWarehouse }) => {


    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
            console.log(i);
            if (id === i.id) {
                i[event.target.name] = event.target.value;

            }
            return i;
        })
        setInputFields(newInputFields);
    }

    const handleAddFields = (e) => {
        e.preventDefault();
        setInputFields([...inputFields, { id: uuidv4(), ProductName: '', quntity: '' }])
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
                i["ProductName"] = selectedOption;
            }
            return i;
        })
        console.log(newInputFields);
        setInputFields(newInputFields);
    };


    // asyncselect 
    const loadOptions = async (inputText, callback) => {
        const response = await fetch(`http://localhost:5000/search-product/${ChooseWarehouse}?search=${inputText}`)
        const json = await response.json()
        callback(json.map(i => ({ label: i.Product, value: i.Product })))
    }
    return (
        <div className='my-4'>


            {
              ChooseWarehouse.length > 1?  inputFields.map(inputField => (
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
                            <div className='form-control w-3/6'>
                                <label className="label font-bold">Quantity</label>
                                <input type="number" placeholder="Type Quantity.." name="quntity" value={inputField.quntity} onChange={event => handleChangeInput(inputField.id, event)} className='input h-[38px] input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400 w-full  rounded-none' />
                            </div>

                        </div>
                        <p disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)} className='px-4 py-2 bg-slate-400 mt-auto text-white rounded-none rounded-r-lg'>remove</p>
                    </div>
                )):''
            }

            <div className='flex justify-end my-4'>
                <p className='btn btn-secondary max-w-[100px]' onClick={handleAddFields}>Add</p>
            </div>
        </div>
    );
};

export default SelectProductForm;