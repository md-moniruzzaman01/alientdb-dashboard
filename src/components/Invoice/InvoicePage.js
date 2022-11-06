import { useState } from 'react';
import { useEffect } from 'react';
import { FaGlobe } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { AiFillPrinter } from "react-icons/ai";
const InvoicePage = () => {
    const { id } = useParams()
    const componentRef = useRef();
    const [invoice, setInvoice] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`, {
        })
            .then(res => res.json())
            .then(data => {
                setInvoice(data);
            })
    }, [id])
    return (
        <div>
            <ReactToPrint
                content={() => componentRef.current}

                trigger={() => <button className='btn btn-ghost mt-5 border-gray-300  absolute top-0 right-10'><span className='text-2xl mr-2'><AiFillPrinter /></span> Print</button>}



            />

            <div className='max-w-5xl px-16 mx-auto my-11' ref={componentRef}>
                <div className='pl-7'> 
                <h1 className='text-4xl flex justify-center items-center font-semibold my-4'><span className='text-4xl inline-flex mr-2'><FaGlobe /></span> Ali Enterprise</h1>
                <div className='mx-auto max-w-4xl'>
                    <div className='grid grid-cols-3 gap-5  mt-11 mx-0 '>
                        <p><span className='font-bold text-base'>Customar Name:</span> {invoice?.customerName}</p>
                        <p><span className='font-bold text-base'>Date:</span> {invoice?.Date} </p>
                        <p><span className='font-bold text-base'>Invoice Id :</span> {invoice?.InvoiceHandle}</p>
                        <p><span className='font-bold text-base'>Warehouse Name:</span> {invoice?.warehouseChoose}</p>
                        <p><span className='font-bold text-base'>Stuff Name:</span> {invoice?.InChargePerson}</p>

                    </div>
                </div>


                <div class="overflow-x-auto relative  px-0 max-w-4xl">
                    <table class="w-full text-sm text-left text-gray-500 mt-11 ">
                        <thead class="text-xs text-gray-700 uppercase rounded-none bg-gray-100 border">
                            <tr>
                                <th scope="col" class="py-3 px-6 rounded-none">
                                    Product name
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Qty
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                invoice?.product && invoice?.product.map(pd => <tr key={pd.id} class="bg-white">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                        {pd?.Product}
                                    </th>
                                    <td class="py-4 px-6">
                                        {pd?.quntity}
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    );
};

export default InvoicePage;