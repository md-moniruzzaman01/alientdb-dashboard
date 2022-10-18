import React from 'react';
import { toast } from 'react-toastify';

const AddWarehouse = () => {
    const handleWarehouseAdding = (e) => {
        e.preventDefault();
        const WarehouseLocation= e.target.WarehouseLocation.value;
        const WarehouseCode = e.target.warehouseCode.value;
        const warehouse = {WarehouseCode,WarehouseLocation}
        
        
        fetch('https://warm-cliffs-27985.herokuapp.com/add-warehouse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(warehouse),
        })
            .then((response) => response.json())
            .then((data) => {
               
                console.log(data);
                if (data.acknowledged) {
                    toast('warehouse add successfully')
                    e.target.reset();
                }else if(data.error){
                    toast(data.error)
                }else if(data.addEmpoloyee == "ok"){
                    toast('warehouse added succesfully')
                }
                else{
                    toast('some think wrong')
                }
            })
    }
    return (
        <div className='m-4'>
            <div className='w-full bg-secondary h-11 text-xl font-semibold text-base-100 flex items-center px-4 rounded-t'>Add Warehouse</div>
            <form onSubmit={handleWarehouseAdding}>
                <div className='flex justify-around'>
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold">Warehouse Location</span>
                        </label>
                        <input type="text" name='WarehouseLocation' placeholder="Type warehouse location..." className="input input-bordered rounded-none rounded-l focus:outline-none focus:ring-1 focus:ring-blue-400" required/>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Warehouse code</span>
                        </label>
                        <input type="text" name='warehouseCode' placeholder="Type warehouse code..." className="input input-bordered rounded-none rounded-r focus:outline-none focus:ring-1 focus:ring-blue-400" />
                    </div>
                </div>
                <div className='my-4 flex justify-end'>
                    <input type="submit" className='btn btn-secondary' value="Add" />
                </div>
            </form>
        </div>
    );
};

export default AddWarehouse;