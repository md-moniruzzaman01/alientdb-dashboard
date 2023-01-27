import React, { useRef, useState } from 'react';
import Papa from "papaparse";
import { useEffect } from 'react';
import { toast } from 'react-toastify';
const UploadCSVfile = () => {
  const [csvfile, setCsvFile] = useState(null)
  // const [userJSON, setUserJSON] = useState(null)
  const inputField = useRef(null)
const [Uploading, setUploading]=useState(false)


  const handleJsonfile = (e) => {
    setUploading(true)
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         authorization: `bearer ${localStorage.getItem('token')}`
         },
      body: JSON.stringify({ data: csvfile })
    };
    if (csvfile) {
      fetch('http://localhost:5000/api/upload/product', requestOptions)
        .then(response => {
          response.json();
          if(response.status == 200){
            setUploading(false)
            toast('Product uploaded successfully')
          }else{
            setUploading(false)
            toast('Product uploading  error')
          }
          
        })
        .then(data => {
          e.target.reset();
          
        });

    } else {
      console.log('no file found');
    }

  }

  return (
  
    <form onSubmit={handleJsonfile} className='shadow bg-base-100 p-4'>
      <input type="file" name="csv" accept="*.csv" onChange={(e) => {
        const files = e.target.files;
        if (files) {

          Papa.parse(files[0], {
            header: true,
            complete: (results) => {
              let productList = [];
            const dataProcess =   results.data.map(o => {
                
                productList.push(o)
                return productList;
              })
             setCsvFile(productList)
            }
          })

        }
      }} />
      <input type="submit" className='btn' value="submit" />
    </form>
    
  );
};

export default UploadCSVfile;