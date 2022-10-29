import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import LoadingScreen from '../Shared/LoadingScreen';
import TopOfPage from '../Shared/TopOfPage';
import StackReportList from './StackReportList';
const StackReportPage = () => {
    const [pageCount, setPageCount] = useState(0)
    const [productCount, setProductCount] = useState(0)
    const [searchPageCount, setSearchPageCount] = useState(0)
    const [searchProductCount, setSearchProductCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [size, setSize] = useState(100)
    const [currentContainer, setContainer] = useState(false)
    const [searchData, setSearchData] = useState([])
    const [searchURL, setSearchURL] = useState([])
    const [searchcurrentPage, setSearchCurrentPage] = useState(0)
    function refreshPage() {
        window.location.reload(false);
    }

    const { data: product, isLoading, refetch } = useQuery('product', () => fetch(`http://localhost:5000/inventory?page=${currentPage}&size=${size}`).then(res => res.json()));
    useEffect(() => {
        refetch()
    }, [currentPage, size])

const url = "http://localhost:5000/count-inventory"
const URLForsearch = 'product-list'
    const DeleteProduct = (id) => {
        fetch(`http://localhost:5000/remove/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const confarm = window.confirm('Delete this item')
                if (confarm) {
                    if (data.deletedCount > 0) {
                        toast('order placed successfully')
                        refreshPage()
                    } else {
                        toast('order place s unsuccessfully')
                    }
                }

            })
    }

     const container = currentContainer ?
     <StackReportList 
     product={searchData} 
     url={searchURL} 
     DeleteProduct={DeleteProduct} 
     size={size} 
     setCurrentPage={setSearchCurrentPage}
     pageCount={searchPageCount} setPageCount={setSearchPageCount}
    productCount={searchProductCount} setProductCount={setSearchProductCount}
      />:
       <StackReportList 
       product={product} 
       url={url} 
       DeleteProduct={DeleteProduct} 
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
            <TopOfPage setSize={setSize} pageName="Stack report" URLForsearch={URLForsearch} size={size} setSearchURL={setSearchURL} currentPage={searchcurrentPage} setSearchData={setSearchData} currentContainer={currentContainer} setContainer={setContainer} />
            {/* table */}
            {container}
        </div>
    );
};

export default StackReportPage;