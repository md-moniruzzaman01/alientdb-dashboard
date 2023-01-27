import React from 'react';
import PaginationPage from '../Shared/PaginationPage';
import ProductTable from './ProductTable';

const ProductList = ({ product, DeleteProduct, setCurrentPage,size,productCount,pageCount}) => {
    return (
        <div>
            {/* <div className='btn btn-sm my-2 btn-ghost' onClick={()=> Deleteall()}>delete all</div> */}
            <ProductTable product={product} DeleteProduct={DeleteProduct}/>
            <PaginationPage pageCount={pageCount} productCount={productCount} setCurrentPage={setCurrentPage} size={size}/>
        </div>
    );
};

export default ProductList;