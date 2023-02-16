import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import LoadingScreen from '../Shared/LoadingScreen';
import TopOfPage from '../Shared/TopOfPage';
import InventoryList from './InventoryList';
const InventoryPage = () => {
    const [pageCount, setPageCount] = useState(0)
    const [productCount, setProductCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [size, setSize] = useState(100)
    const [searchInput, setSearchInput] = useState({})


    const { data, isLoading, refetch } = useQuery('product', () =>
        fetch(`https://alientbd-version-2.onrender.com/api/product/inventory?search=${searchInput}&page=${currentPage}&limit=${size}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.success) {
                    const product = data.data;
                    const count = data.count
                    setProductCount(count)
                    const pages = Math.ceil(count / size)
                    setPageCount(pages)
                    return { product, count, error: false }
                } else {
                    return { product: [], count: 0, error: data.data }
                }

            })
    );

    useEffect(() => {
        refetch()
    }, [currentPage, size,searchInput])

    if (isLoading) {
        return <LoadingScreen />
    }

    return (
        <div>
            <div>
                <TopOfPage setSize={setSize} pageName="Inventory Page"      setSearchInput={setSearchInput} setCurrentPage={setCurrentPage} />
                {/* table */}
                <InventoryList
                   product={data?.product}
                   size={size}
                   pageCount={pageCount} 
                   productCount={productCount} 
                   setCurrentPage={setCurrentPage}
                />
            </div>

        </div>
    );
};

export default InventoryPage;