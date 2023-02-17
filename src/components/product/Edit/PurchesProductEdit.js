import React, { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
const PurchesProductEdit = ({ id }) => {
    const InputStyle = "input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400 w-full  md:w-28 lg:w-32 xl:w-44  my-2 lg:my-0 rounded-none";
    const [ProductEdit, setProductEdit] = useState([{ id: uuidv4(), Product: '', discribtion: '', warehouse: [] },]);
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`, {}).then(res => res.json()).then(data => {
            setProductEdit(data)
            setWarehouse(data[0]?.warehouse);

        });
    }, [])
    const [warehouse, setWarehouse] = useState([]);

    const HandleEdit = (e) => {
        setProductEdit([{ ...ProductEdit, [e.target.name]:e.target.value }])
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/purches-update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ProductEdit),
        })
            .then((response) => response.json())
            .then((data) => { 
                if (data.message) {
                    toast('Product successfully updated')
                }else{
                    toast('Some think wrong! try again')
                }
            })
    };
    
    // useEffect(() => {
    //     fetch("http://localhost:5000/warehouse", {}).then(res => res.json()).then(data => setWarehouse(data));

    // }, [])
    // http://localhost:5000/
    const WarehouseList = warehouse && warehouse.map((wh, i) => <option key={i}>{wh.houseName}</option>);
    return (
        <form onSubmit={handleSubmit} className='w-full max-w-6xl mx-auto'>
            <div className='flex justify-end'>
                <div className='w-10/12 flex justify-between  m-2 max-w-4xl xl:max-w-6xl'>
                    <p>Product Name</p>
                    <p>Description</p>
                    <p>Quantity</p>
                    <p>Warehouse</p>
                </div>
            </div>
            {
                ProductEdit && ProductEdit.map(inputField => (

                    <div className='mx-2 md:static lg:flex justify-end my-2'>
                        <div className='md:static lg:flex  justify-center parches-page'>
                            <input type="text" name='Product' value={inputField.Product} onChange={(e) => HandleEdit(e)} placeholder="Product name.." className="input input-bordered rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-400  w-full  md:w-32 lg:w-44 xl:w-72 max-w-xs rounded-none" />
                            <input type="text" name='discribtion' value={inputField.discribtion} onChange={(e) => HandleEdit(e)} placeholder="Discribtion.." className={InputStyle} />
                            <input type="text" name='qnt' value={inputField.qnt} onChange={(e) => HandleEdit(e)} placeholder="Quantity..." className={InputStyle} />
                            <select name='warehouse' value={inputField.warehouse} onChange={(e) => HandleEdit(e)} className='input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400  w-full  md:w-32 lg:w-52 xl:w-72 my-2 lg:my-0 rounded-none'>
                                <option selected >Choose warehouse</option>
                                {WarehouseList}
                            </select>
                        </div>
                    </div>
                ))}
            <input type="submit" className='btn btn-success w-full lg:w-20 ml-2' value="submit" />
        </form>

    );
};

export default PurchesProductEdit;
