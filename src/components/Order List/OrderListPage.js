import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import TopOfPage from '../Shared/TopOfPage';
import OrderList from './OrderList';
import OrderPage from './OrderPage';
const OrderListPage = () => {
    const [pageCount, setPageCount] = useState(0)
    const [product, setProduct] = useState([])
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
    // const { data: product, isLoading, refetch } = useQuery('product', () => fetch(`https://alientbd-servar.onrender.com/all-order?page=${currentPage}&size=${size}`).then(res => res.json()));
    useEffect(() => {
        fetch(`https://alientbd-servar.onrender.com/all-order?page=${currentPage}&size=${size}`,{
            headers: {
                authorization:`bearer ${localStorage.getItem('token')}`
            },
        })
        .then(res => res.json())
       .then(data=> {
        setProduct(data)
       })
    }, [currentPage, size])
    const url = "https://alientbd-servar.onrender.com/countOrder";
    const URLForsearch = 'order-search';
    useEffect(() => {
        fetch("https://alientbd-servar.onrender.com/countOrder", {
        })
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                setProductCount(count)
                const pages = Math.ceil(count / size)
                setPageCount(pages)
            })
    }, [size])



    const container = currentContainer ?
        <OrderList
            product={searchData}
            url={searchURL}
            size={size}
            setCurrentPage={setSearchCurrentPage}
            pageCount={searchPageCount} setPageCount={setSearchPageCount}
            productCount={searchProductCount} setProductCount={setSearchProductCount}
        /> :
        <OrderList
            product={product}
            url={url}
            size={size}
            setCurrentPage={setCurrentPage}
            pageCount={pageCount} setPageCount={setPageCount}
            productCount={productCount} setProductCount={setProductCount}
        />





    return (
        <div>
            <OrderPage setSize={setSize} pageName="Order List" URLForsearch={URLForsearch} size={size} setSearchURL={setSearchURL} currentPage={searchcurrentPage} setSearchData={setSearchData} currentContainer={currentContainer} setContainer={setContainer} />
            {container}
           
        </div>
    );
};

export default OrderListPage;