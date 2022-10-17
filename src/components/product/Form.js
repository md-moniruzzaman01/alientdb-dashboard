import React from 'react';
import InputFeilds from './InputFeilds';

const Form = () => {
    return (

        <form>
            <InputFeilds />
            <div className='flex justify-end m-4'>
                <button className='btn btn-secondary'>Add</button>
            </div>
        </form>

    );
};

export default Form;