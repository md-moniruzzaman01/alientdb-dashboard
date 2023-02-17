import React, { useRef, useState } from 'react';
import Papa from "papaparse";
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import LoadingScreen2 from '../Shared/LoadingScreen2';
import Notification from '../Shared/Notification';
const UploadCSVfile = () => {
  const [csvfile, setCsvFile] = useState(null)
  // const [userJSON, setUserJSON] = useState(null)
  const inputField = useRef(null)
  const [Uploading, setUploading] = useState(false)
  const [fetchData, setFetchData] = useState(null)
  let Alart;

  const handleJsonfile = (e) => {
    setUploading(true)
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('tmtoken')}`
      },
      body: JSON.stringify({ data: csvfile })
    };
    if (csvfile) {
      fetch('http://localhost:5000/api/upload/product', requestOptions)
        .then(response => response.json())
        .then(data => {
          setFetchData(data)
          e.target.reset();
        });

    } else {
      toast('no file found');
    }

  }
  if (Uploading) {
    Alart = <Notification
      status='open'
      veriant='loading'
      title="Loading..."
      message='please wait for a moment'
    />
  }

  if (fetchData?.success) {
    Alart = <Notification
      status='open'
      veriant='success'
      IsReload = {false}
      title="success"
      message={fetchData?.message}
    />
  } else if (fetchData?.success === false) {
    Alart = <Notification
      status='open'
      veriant='false'
      IsReload = {false}
      title="Error found"
      message={fetchData?.message}
    />
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
              const dataProcess = results.data.map(o => {

                productList.push(o)
                return productList;
              })
              setCsvFile(productList)
            }
          })

        }
      }} />
      <input type="submit" className='btn btn-success' value="submit" />
      {Alart}
    </form>

  );
};

export default UploadCSVfile;