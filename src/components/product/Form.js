import React, { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import AsyncSelect from 'react-select/async';
import '../../App.css'
const Form = () => {
    const InputStyle = "input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400 w-full  md:w-28 lg:w-32 xl:w-44  my-2 lg:my-0 rounded-none";
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), Product: '', discribtion: '', qnt: '', warehouse: '' },
    ]);
    const [warehouse, setWarehouse] = useState([])
    const handleAddFields = (e) => {
        e.preventDefault();
        setInputFields([...inputFields, { id: uuidv4(), Product: '', discribtion: '', qnt: '', warehouse: '' }])
    }
    const handleRemoveFields = id => {
        const values = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }
    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value;

            }
            return i;
        })
        setInputFields(newInputFields);
    };
    const onChangeSelectedOption = (e, id) => {
        const selectedOption = e.value;
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i["Product"] = selectedOption;

            }
            return i;
        })
        setInputFields(newInputFields);
    };
        // asyncselect 
        const loadOptions = async (inputText, callback) => {
            const response = await fetch(`http://localhost:5000/all/`)
            const json = await response.json()
            callback(json.map(i => ({ label: i.Product, value: i.Product, id: i._id })))
        }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/purches-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(inputFields),
        })
            .then((response) => response.json())
            .then((data) => { 
                if (data.message ==='forbidden') {
                    toast('Authontication fail')
                }else if(data.message) {
                    toast('Product successfully added')
                }else{
                    toast('Some think wrong! try again')
                }
            })
    };
    useEffect(() => {
        fetch("http://localhost:5000/warehouse", {}).then(res => res.json()).then(data => setWarehouse(data));

    }, [])
    const WarehouseList = warehouse && warehouse.map((wh, i )=> <option key={i}>{wh.warehouseLocation}</option>);

    return (
        <form onSubmit={handleSubmit} className='w-full'>
            {
                inputFields.map(inputField => (

                    <div className='mx-2 md:static lg:flex justify-end my-2'>
                        <div className='md:static lg:flex  justify-center parches-page'>
                            {/* <input type="text" name='Product' value={inputField.Product} onChange={event => handleChangeInput(inputField.id, event)} placeholder="Product name.." className="input input-bordered rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-400  w-full  md:w-32 lg:w-44 xl:w-72 max-w-xs rounded-none" /> */}
                            <AsyncSelect
                                    cacheOptions
                                    loadOptions={loadOptions}
                                    defaultOptions
                                    onChange={e => onChangeSelectedOption(e, inputField.id)}

                                />
                            <input type="text" name='discribtion' value={inputField.discribtion} onChange={event => handleChangeInput(inputField.id, event)} placeholder="Discribtion.." className={InputStyle} />
                            <input type="text" name='qnt' value={inputField.qnt} onChange={event => handleChangeInput(inputField.id, event)} placeholder="Quantity..." className={InputStyle} />
                            {/* <input type="text" name='ParchesCost' value={inputField.ParchesCost} onChange={event => handleChangeInput(inputField.id, event)} placeholder="Purchase Cost.." className={InputStyle} /> */}
                            <select name='warehouse' value={inputField.warehouse} onChange={event => handleChangeInput(inputField.id, event)} className='input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400  w-full  md:w-32 lg:w-52 xl:w-72 my-2 lg:my-0 rounded-none'>
                                <option selected >Choose warehouse</option>
                                {WarehouseList}
                            </select>
                            {/* <input type="text" name='warehouse' value={inputField.warehouse} onChange={event => handleChangeInput(inputField.id, event)} placeholder="select warehouse.." className='input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400  w-full  md:w-32 lg:w-44 xl:w-72 max-w-xs rounded-none' /> */}
                        </div>
                        <p disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)} className='btn btn-error w-full lg:w-20  text-white rounded-none rounded-r-lg'>remove</p>
                    </div>
                ))}
            <div className='flex justify-end m-4'>
                <p className='btn btn-secondary' onClick={handleAddFields}>Add</p>
            </div>
            <input type="submit" className='btn btn-success w-full lg:w-20 ml-2' value="submit" />
        </form>

    );
};

export default Form;