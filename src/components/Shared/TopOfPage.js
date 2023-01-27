import React from 'react';
import { useEffect } from 'react';
const TopOfPage = ({ setSize, pageName,setSearchInput ,setCurrentPage}) => {

    const handleAfterSearch = (e) => {
        const search = e.target.value;
        setSearchInput(search)
        if (search.length == 1) {
            setCurrentPage(0)
        }
         
    }

    return (
        <div className="mb-2 w-full">
            <p className='text-3xl font-semibold text-gray-800 mt-2 mx-4'>{pageName}</p>

            <div className="block sm:flex  items-center md:divide-x md:divide-gray-100">

                <div className='w-full'>
                    <select onChange={e => setSize(e.target.value)} className="mx-4 select w-20 select-bordered select-sm">
                        <option value="100">100</option>
                        <option value="10">10</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                        <option value="150">150</option>
                    </select>
                </div>
                <div className="sm:pr-3 mb-4 sm:mb-0">
                    <label htmlFor="products-search" className="sr-only">Search</label>
                    <div className="mt-1 relative sm:w-64 xl:w-96">
                        <input type="search" onChange={e => handleAfterSearch(e)}  name="search" id="products-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Search for products" />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default TopOfPage;