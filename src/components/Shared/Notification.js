import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CheckSvg from './CheckSvg';
import ErrorSvg from './ErrorSvg';
import LoadingSvg from './LoadingSvg';

const Notification = ({ status, veriant, title, message }) => {
    const [open, setopen] = useState(false)
    let container;
    useEffect(() => {
        if (status === "open") {
            setopen(true)
        }else{
            setopen(false)
        }

    }, [status])
    if (veriant === "success") {
        container = <CheckSvg />
    } else if (veriant === "loading") {
        container = <LoadingSvg />
    } else {
        container = <ErrorSvg />
    }

  const closeHandle =()=> {
    setopen(!open)
    window.location.reload(false);
  }
    return (
        <div>
            {/* <input type="checkbox" id="alart-modal" className="modal-toggle" /> */}
            <div className={`modal modal-bottom sm:modal-middle ${open ? 'modal-open' : ''}`}>
                <div class="bg-white  rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                {container}

                            </div>
                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 class="text-lg leading-6 font-medium text-gray-900">
                                    {title}
                                </h3>
                                <div class="mt-2">
                                    <p class="text-sm leading-5 text-gray-500">
                                        {message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {veriant !== "loading" && <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                            <button onClick={closeHandle} class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                Confirm
                            </button>
                        </span>


                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Notification;