import React from 'react';

const InputFeilds = () => {
    const InputStyle = "input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400 w-full  md:w-28 lg:w-32 xl:w-44  max-w-xs rounded-none"
    return (
        <div className='mx-2 flex justify-center'>
            <div>
            <input type="text" placeholder="Product name.." className="input input-bordered rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-400  w-full  md:w-32 lg:w-44 xl:w-72 max-w-xs rounded-none" />
            <input type="text" placeholder="Discribtion.." className={InputStyle} />
            <input type="text" placeholder="Quantity..." className={InputStyle} />
            <input type="text" placeholder="Purchase Cost.." className={InputStyle} />
            <input type="text" placeholder="select warehouse.." className='input input-bordered focus:outline-none focus:ring-1 focus:ring-blue-400  w-full  md:w-32 lg:w-44 xl:w-72 max-w-xs rounded-none'/>
            </div>
             <button className='btn btn-error  text-white rounded-none rounded-r-lg'>remove</button>
        </div>
    );
};

export default InputFeilds;