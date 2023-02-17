import React, { useRef, useState } from 'react';
import Papa from "papaparse";
import { toast } from 'react-toastify';
const AddProductCsvFile = () => {
    const [csvfile, setCsvFile] = useState(null)
    const inputField = useRef(null)
  
  
    const handleAddProductCsvfile = (e) => {
        e.preventDefault();
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', authorization:`Bearer ${localStorage.getItem('tmtoken')}` },
        body: JSON.stringify({ data: csvfile })
      };
      if (csvfile) {
        fetch('http://localhost:5000/api/upload', requestOptions)
          .then(response => response.json())
          .then(data => {
            e.target.reset();
          });
  
      } else {
        toast('no file found')
      }
    }
    return (

        <form onSubmit={handleAddProductCsvfile} className='bg-base-100 rounded shadow p-4'>
            <input type="file" name="csv" accept="*.csv" onChange={(e) => {
                const files = e.target.files;
                if (files) {

                    Papa.parse(files[0], {
                        header: true,
                        complete: (results) => {
                            let productList = [];
                            const dataProcess = results.data.map(o => {

                                productList.push(o)
                                return productList;
                            })
                            setCsvFile(productList)
                        }
                    })

                }
            }} />
            <input type="submit" className='btn btn-success text-base-100 px-7' value="submit" />
        </form>

    );
};

export default AddProductCsvFile;