import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import LoadingScreen from '../Shared/LoadingScreen';
import OrderList from './OrderList';
import OrderPage from './OrderPage';
const OrderListPage = () => {
    const [pageCount, setPageCount] = useState(0)
    const [productCount, setProductCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [size, setSize] = useState(100)
    const [searchInput, setSearchInput] = useState({})

    // const [pageCount, setPageCount] = useState(0)
    // const [product, setProduct] = useState([])
    // const [productCount, setProductCount] = useState(0)
    // const [searchPageCount, setSearchPageCount] = useState(0)
    // const [searchProductCount, setSearchProductCount] = useState(0)
    // const [currentPage, setCurrentPage] = useState(0)
    // const [size, setSize] = useState(100)
    // const [currentContainer, setContainer] = useState(false)
    // const [searchData, setSearchData] = useState([])
    // const [searchURL, setSearchURL] = useState([])
    // const [searchcurrentPage, setSearchCurrentPage] = useState(0)
    const { data, isLoading, refetch } = useQuery('order', () =>
        fetch(`http://localhost:5000/api/order?search=${searchInput}&page=${currentPage}&size=${size}`)
            .then(res => res.json())
            .then(data=>{
                if (data?.success) {
                    const order = data.data;
                    const count = data.count
                    setProductCount(count)
                    const pages = Math.ceil(count / size)
                    setPageCount(pages)
                    return { order, count, error: false }
                } else {
                    return { order: [], count: 0, error: data.data }
                }
            })
    );
    useEffect(() => {
        refetch()
    }, [currentPage, size,searchInput])

    if (isLoading) {
        return <LoadingScreen/>
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/all-order?page=${currentPage}&size=${size}`, {
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('token')}`
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }, [currentPage, size])


console.log(data.order);


    return (
        <div>
            <OrderPage setSize={setSize} pageName="Order list" setSearchInput={setSearchInput} setCurrentPage={setCurrentPage} />
            <OrderList
             orders={data.order}
                size={size}
                pageCount={pageCount}
                productCount={productCount}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default OrderListPage;