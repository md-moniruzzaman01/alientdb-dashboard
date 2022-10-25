import React from 'react';
import LoadingAnimation from '../../image/30206-loading.gif'

const LoadingScreen = () => {
    return (
        <div className='min-h-screen flex justify-center items-center bg-white'>
            {/* <button className="btn btn-ghost loading">loading</button> */}
            <img src={LoadingAnimation} className='h-72 w-auto' alt="Loading animation" />
        </div>
    );
};

export default LoadingScreen;