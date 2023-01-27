import React from 'react';
import ReactPaginate from 'react-paginate';
const PaginationPage = ({pageCount, productCount, setCurrentPage, size}) => {
    return (
        <div className="bg-white z-40 sticky sm:flex items-center w-full sm:justify-between bottom-0 right-0 border-t border-gray-200 p-2">
                <div className="flex items-center mb-2 sm:mb-0">
                    <span className="text-sm font-normal text-gray-500">Showing <span className="text-gray-900 font-semibold">{size}</span> of <span className="text-gray-900 font-semibold">{productCount}</span></span>
                </div>
                <div className='flex justify-center'>

                    <ReactPaginate
                        previousLabel={"previous"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={(e) => setCurrentPage(e.selected)}
                        containerClassName={"btn-group "}
                        pageClassName={"btn"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"btn"}
                        previousLinkClassName={"btn"}
                        nextClassName={"btn"}
                        nextLinkClassName={"page-link"}
                        breakClassName={"btn btn-disabled"}
                        breakLinkClassName={"page-link"}
                        activeClassName={"btn btn-secondary"}
                    />
                </div>
            </div>
    );
};

export default PaginationPage;