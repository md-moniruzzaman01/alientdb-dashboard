import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import LoadingScreen from '../Shared/LoadingScreen';
import TopOfPage from '../Shared/TopOfPage';
import ProductList from './ProductList';
const ProductByWarehousePage = ({warehouseLocation}) => {
    const [pageCount, setPageCount] = useState(0)
    const [productCount, setProductCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [size, setSize] = useState(100)
    const [searchInput, setSearchInput] = useState({})

    const {data, isLoading, refetch } = useQuery('product', () => 
    fetch(`http://localhost:5000/api/warehouse/${warehouseLocation}?search=${searchInput}&page=&limit=${size}`)
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
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             const confarm = window.confirm('Delete this item')
    //             if (confarm) {
    //                 if (data.deletedCount > 0) {
    //                     toast('product delete successfull')
    //                     refreshPage()
    //                 } else {
    //                     toast('product delete unsuccess')
    //                 }
    //             }

    //         })
    // }

    
    //  const container = currentContainer ?
    //  <ProductList 
    //  product={searchData} 
    //  url={searchURL} 
    //  DeleteProduct={DeleteProduct} 
    //  size={size} 
    //  setCurrentPage={setSearchCurrentPage}
    //  pageCount={searchPageCount} setPageCount={setSearchPageCount}
    // productCount={searchProductCount} setProductCount={setSearchProductCount}
    //   />:
    //    <ProductList 
    //    product={product} 
    //    url={url} 
    //    warehouseLocation={warehouseLocation}
    //    DeleteProduct={DeleteProduct}
    //    size={size} 
    //    setCurrentPage={setCurrentPage} 
    //    pageCount={pageCount} setPageCount={setPageCount}
    //    productCount={productCount} setProductCount={setProductCount}
    //    />


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
             warehouseLocation={warehouseLocation}
             pageCount={pageCount} 
             productCount={productCount} 
             setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default ProductByWarehousePage;