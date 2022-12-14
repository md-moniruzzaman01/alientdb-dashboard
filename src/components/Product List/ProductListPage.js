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
    const [searchPageCount, setSearchPageCount] = useState(0)
    const [searchProductCount, setSearchProductCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [size, setSize] = useState(100)
    const [currentContainer, setContainer] = useState(false)
    const [searchData, setSearchData] = useState([])
    const [searchURL, setSearchURL] = useState([]);
    const [searchcurrentPage, setSearchCurrentPage] = useState(0)
    function refreshPage() {
        window.location.reload(false);
    }

    const { data: product, isLoading, refetch } = useQuery('product', () => fetch(`https://alientbd-servar.onrender.com/all?page=${currentPage}&size=${size}`).then(res => res.json()));
   

    useEffect(() => {
        refetch()
    }, [currentPage, size])
const URLForsearch = 'product-list'
const url = "https://alientbd-servar.onrender.com/countproduct"
    const DeleteProduct = (id) => {
        fetch(`https://alientbd-servar.onrender.com/remove/${id}`, {
            method: 'DELETE',
            headers: {
                authorization:`bearer ${localStorage.getItem('token')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                const confarm = window.confirm('Delete this item')
                if (confarm) {
                    if (data.deletedCount > 0) {
                        toast('Product delete successfully')
                        refetch()
                    } else {
                        toast('Product delete unsuccessfully')
                    }
                }

            })
    }
    const Deleteall = (id) => {
        fetch(`https://alientbd-servar.onrender.com/removeall`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const confarm = window.confirm('Delete this item')
                if (confarm) {
                    if (data.deletedCount > 0) {
                        toast('Product delete successfully')
                        refetch()
                    } else {
                        toast('Product delete unsuccessfully')
                    }
                }

            })
    }
    
     const container = currentContainer ?
     <ProductList 
     product={searchData} 
     url={searchURL} 
     DeleteProduct={DeleteProduct} 
     size={size} 
     setCurrentPage={setSearchCurrentPage}
     pageCount={searchPageCount} setPageCount={setSearchPageCount}
    productCount={searchProductCount} setProductCount={setSearchProductCount}
      />:
       <ProductList 
       product={product} 
       url={url} 
       DeleteProduct={DeleteProduct}
       Deleteall={Deleteall} 
       size={size} 
       setCurrentPage={setCurrentPage} 
       pageCount={pageCount} setPageCount={setPageCount}
       productCount={productCount} setProductCount={setProductCount}
       />


    if (isLoading) {
        return <LoadingScreen />
    }

    return (
        <div>
            <TopOfPage setSize={setSize} pageName="Product List" URLForsearch={URLForsearch} size={size} setSearchURL={setSearchURL} currentPage={searchcurrentPage} setSearchData={setSearchData} currentContainer={currentContainer} setContainer={setContainer} />
            {/* table */}
            {container}
        </div>
    );
};

export default ProductListPage;