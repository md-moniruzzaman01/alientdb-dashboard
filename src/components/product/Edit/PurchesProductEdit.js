import React, { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
const PurchesProductEdit = ({id}) => {
    const InputStyle = "input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400 w-full  md:w-28 lg:w-32 xl:w-44  my-2 lg:my-0 rounded-none";
    const [ProductEdit, setProductEdit] = useState([
        { id: uuidv4(), Product: '', discribtion: '', warehouse: [] },
    ]);
    useEffect(()=>{
        fetch(`http://localhost:5000/product/${id}`, {}).then(res => res.json()).then(data => setProductEdit(data));
    },[])
    const [warehouse, setWarehouse] = useState([]);

    const HandleEdit = (e)=>{
        setProductEdit({...ProductEdit,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/purches-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ProductEdit),
        })
            .then((response) => response.json())
            .then((data) => { 
                if (data.message) {
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
                ProductEdit.map(inputField => (

                    <div className='mx-2 md:static lg:flex justify-end my-2'>
                        <div className='md:static lg:flex  justify-center parches-page'>
                            <input type="text" name='Product' value={inputField.Product} onChange={(e)=>HandleEdit(e)} placeholder="Product name.." className="input input-bordered rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-400  w-full  md:w-32 lg:w-44 xl:w-72 max-w-xs rounded-none" />
                            <input type="text" name='discribtion' value={inputField.discribtion} onChange={(e)=>HandleEdit(e)} placeholder="Discribtion.." className={InputStyle} />
                            <input type="text" name='qnt' value={inputField.qnt} onChange={(e)=>HandleEdit(e)} placeholder="Quantity..." className={InputStyle} />
                            {/* <input type="text" name='ParchesCost' value={inputField.ParchesCost} onChange={event => handleChangeInput(inputField.id, event)} placeholder="Purchase Cost.." className={InputStyle} /> */}
                            <select name='warehouse' value={inputField.warehouse} onChange={(e)=>HandleEdit(e)} className='input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400  w-full  md:w-32 lg:w-52 xl:w-72 my-2 lg:my-0 rounded-none'>
                                <option selected >Choose warehouse</option>
                                {WarehouseList}
                            </select>
                            {/* <input type="text" name='warehouse' value={inputField.warehouse} onChange={event => handleChangeInput(inputField.id, event)} placeholder="select warehouse.." className='input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400  w-full  md:w-32 lg:w-44 xl:w-72 max-w-xs rounded-none' /> */}
                        </div>
                    </div>
                ))}
            <input type="submit" className='btn btn-success w-full lg:w-20 ml-2' value="submit" />
        </form>

    );
};

export default PurchesProductEdit;
