import React from 'react';

const Emtypage = ({PageTitle}) => {
    return (
        <div className='flex justify-center items-center h-full text-4xl font-bold'>
           <h1>{PageTitle}</h1>
        </div>
    );
};

export default Emtypage;