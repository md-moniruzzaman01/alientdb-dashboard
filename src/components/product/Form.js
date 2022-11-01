import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const Form = () => {
    const InputStyle = "input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400 w-full  md:w-28 lg:w-32 xl:w-44  max-w-xs rounded-none";
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), Product: '', discribtion:'',qnt:'',ParchesCost:'',warehouse:'' },
    ]);
    const handleAddFields = (e) => {
        e.preventDefault();
        setInputFields([...inputFields, { id: uuidv4(),  Product: '', discribtion:'',qnt:'',ParchesCost:'',warehouse:'' }])
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
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputFields);
        // fetch('http://localhost:5000/add-order', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(inputFields),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data); 
        //     })
        
    };
    return (

        <form onSubmit={handleSubmit}>
            {
                inputFields.map(inputField => (
          
            <div className='mx-2 flex justify-center my-2'>
                <div>
                    <input type="text" name='Product' value={inputField.Product} onChange={event => handleChangeInput(inputField.id, event)} placeholder="Product name.." className="input input-bordered rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-400  w-full  md:w-32 lg:w-44 xl:w-72 max-w-xs rounded-none" />
                    <input type="text" name='discribtion' value={inputField.discribtion} onChange={event => handleChangeInput(inputField.id, event)} placeholder="Discribtion.." className={InputStyle} />
                    <input type="text" name='qnt' value={inputField.qnt} onChange={event => handleChangeInput(inputField.id, event)} placeholder="Quantity..." className={InputStyle} />
                    <input type="text" name='ParchesCost'value={inputField.ParchesCost} onChange={event => handleChangeInput(inputField.id, event)} placeholder="Purchase Cost.." className={InputStyle} />
                    <input type="text" name='warehouse' value={inputField.warehouse} onChange={event => handleChangeInput(inputField.id, event)} placeholder="select warehouse.." className='input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400  w-full  md:w-32 lg:w-44 xl:w-72 max-w-xs rounded-none' />
                </div>
                <p disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)} className='btn btn-error  text-white rounded-none rounded-r-lg'>remove</p>
            </div>
             ))};
            <div className='flex justify-end m-4'>
                <p className='btn btn-secondary' onClick={handleAddFields}>Add</p>
            </div>
            <input type="submit" className='btn btn-success' value="submit" />
        </form>

    );
};

export default Form;