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
        
         trigger={() =><button className='btn btn-ghost mt-5 border-gray-300  absolute top-0 right-10'><span className='text-2xl mr-2'><AiFillPrinter/></span> Print</button>}
           
        
       
      />
     
            <div className='p-4 max-w-6xl mx-auto' ref={componentRef}>
                <h1 className='text-4xl flex justify-center items-center font-semibold my-4'><span className='text-4xl inline-flex mr-2'><FaGlobe /></span> Ali Enterprise</h1>
                <div className='grid grid-cols-3 gap-5  mt-7 mx-auto max-w-6xl'>
                    <p><span className='font-bold text-base'>Customar Name:</span> {invoice?.customerName}</p>
                    <p><span className='font-bold text-base'>Date:</span> 12/11/2022 </p>
                    <p><span className='font-bold text-base'>Invoice Id :</span> {invoice?.InvoiceHandle}</p>
                    <p><span className='font-bold text-base'>Warehouse Name:</span> {invoice?.warehouseChoose}</p>
                    <p><span className='font-bold text-base'>Stuff Name:</span> {invoice?.InChargePerson}</p>

                </div>


                <div class="overflow-x-auto relative mx-0 px-0">
                    <table class="w-full text-sm text-left text-gray-500 mt-11">
                        <thead class="text-xs text-gray-700 uppercase rounded-none bg-gray-100 border">
                            <tr>
                                <th scope="col" class="py-3 px-6 rounded-none">
                                    Product name
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Qty
                                </th>
                                <th scope="col" class="py-3 px-6 rounded-none">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                invoice?.product && invoice?.product.map(pd => <tr key={pd.id} class="bg-white">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                        {pd?.ProductName}
                                    </th>
                                    <td class="py-4 px-6">
                                        {pd?.quntity}
                                    </td>
                                    <td class="py-4 px-6">

                                    </td>
                                </tr>)
                            }


                        </tbody>
                        <tfoot>
                            <tr class="font-semibold text-gray-900 ">
                                <th scope="row" class="py-3 px-6 text-base">Total</th>
                                <td class="py-3 px-6"></td>
                                <td class="py-3 px-6"></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InvoicePage;