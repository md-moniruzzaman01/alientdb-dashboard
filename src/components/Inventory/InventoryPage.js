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

    const { data: product, isLoading, refetch } = useQuery('product', () => fetch(`https://alientbd-servar.onrender.com/inventory?page=${currentPage}&size=${size}`).then(res => res.json()));
    useEffect(() => {
        refetch()
    }, [currentPage, size])

const url = "https://alientbd-servar.onrender.com/count-inventory";
const URLForsearch = 'inventory-search'
    const DeleteProduct = (id) => {
        fetch(`https://alientbd-servar.onrender.com/remove/${id}`, {
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
     <InventoryList 
     product={searchData} 
     url={searchURL} 
     DeleteProduct={DeleteProduct} 
     size={size} 
     setCurrentPage={setSearchCurrentPage}
     pageCount={searchPageCount} setPageCount={setSearchPageCount}
    productCount={searchProductCount} setProductCount={setSearchProductCount}
      />:
       <InventoryList 
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
              <div>
            <TopOfPage setSize={setSize} pageName="Inventory Page" URLForsearch={URLForsearch} size={size} setSearchURL={setSearchURL} currentPage={searchcurrentPage} setSearchData={setSearchData} currentContainer={currentContainer} setContainer={setContainer} />
            {/* table */}
            {container}
        </div>
           
        </div>
    );
};

export default InventoryPage;