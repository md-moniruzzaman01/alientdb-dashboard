import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import LoadingScreen from '../Shared/LoadingScreen';
import TopOfPage from '../Shared/TopOfPage';
import ProductList from './ProductList';

const ProductListPage = () => {
    const [pageCount, setPageCount] = useState(0)
    const [productCount, setProductCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [size, setSize] = useState(100)
    const [searchInput, setSearchInput] = useState({})


    const { data, isLoading, refetch } = useQuery('product', () =>
        fetch(`http://localhost:5000/api/product?search=${searchInput}&page=${currentPage}&limit=${size}`)
            .then(res => res.json())
            .then(data => {
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
    // const DeleteProduct = (id) => {
    //     fetch(`http://localhost:5000/remove/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('token')}`
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             const confarm = window.confirm('Delete this item')
    //             if (confarm) {
    //                 if (data.deletedCount > 0) {
    //                     toast('Product delete successfully')
    //                     refetch()
    //                 } else {
    //                     toast('Product delete unsuccessfully')
    //                 }
    //             }

    //         })
    // }



    if (isLoading) {
        return <LoadingScreen />
    }
    return (
        <div>
            <TopOfPage setSize={setSize} pageName="Product List"     setSearchInput={setSearchInput} setCurrentPage={setCurrentPage}/>
            {/* table */}
            <ProductList
            product={data.product}
            size={size}
            pageCount={pageCount} 
            productCount={productCount} 
            setCurrentPage={setCurrentPage}
        />
        </div>
    );
};

export default ProductListPage;