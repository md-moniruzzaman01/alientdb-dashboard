import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AsyncSelect from 'react-select/async';

const SelectProductForm = ({ inputFields, setInputFields }) => {


    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value;

            }
            return i;
        })
        setInputFields(newInputFields);
    }

    const handleAddFields = (e) => {
        e.preventDefault();
        setInputFields([...inputFields, { id: uuidv4(), firstName: '', lastName: '' }])
    }

    const handleRemoveFields = id => {
        const values = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }










    const onChangeSelectedOption = (e,id) => {
        const selectedOption = e.value; // <--- you can get value from object directly
        console.log(selectedOption,id); // <---- this will be selected object not event
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i["firstName"] = selectedOption;
            }
            return i;
        })
        setInputFields(newInputFields);
    };



    // asyncselect




    const loadOptions = async (inputText, callback) => {
        const response = await fetch(`https://warm-cliffs-27985.herokuapp.com/product-list?search=${inputText}`)
        const json = await response.json()
        callback(json.map(i => ({ label: i.ProductName, value: i.ProductName })))
    }
    return (
        <div className='my-4'>


            {
                inputFields.map(inputField => (
                    <div className='flex'>
                        <div className='w-11/12 flex' key={inputField.id}>

                            <div className='form-control w-3/6'>
                                <label className="label font-bold">Product Name</label>
                                {/* <input type="text" placeholder="Product name.." name="firstName" value={inputField.firstName} onChange={event => handleChangeInput(inputField.id, event)} className="input input-bordered rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-400 w-full rounded-none" /> */}
                                <AsyncSelect
                                    cacheOptions
                                    loadOptions={loadOptions}
                                    defaultOptions
                                    onChange={e=> onChangeSelectedOption(e ,inputField.id)}
                                />
                            </div>
                            <div className='form-control w-3/6'>
                                <label className="label font-bold">Quantity</label>
                                <input type="text" placeholder="Type Quantity.." name="lastName" value={inputField.lastName} onChange={event => handleChangeInput(inputField.id, event)} className='input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400 w-full  rounded-none' />
                            </div>

                        </div>
                        <button disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)} className='btn btn-error mt-auto text-white rounded-none rounded-r-lg'>remove</button>
                    </div>
                ))
            }

            <div className='flex justify-end m-4'>
                <button className='btn btn-secondary' onClick={handleAddFields}>Add</button>
            </div>
        </div>
    );
};

export default SelectProductForm;