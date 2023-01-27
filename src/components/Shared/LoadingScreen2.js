import React from 'react';
import AnimatedImg from '../../image/loading animation.gif'
const LoadingScreen2 = () => {
    return (
        <div className='min-h-screen flex justify-center items-center bg-white'>
            <img src={AnimatedImg} className='h-44 w-auto' alt="Loading animation"  />
            {/* <div className='ring-container'>
                <div class="ring ">Loading..
                    <div className="loading-box"></div>
                </div>
            </div> */}
        </div>
    );
};

export default LoadingScreen2;

