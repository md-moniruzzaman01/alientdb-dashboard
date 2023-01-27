

















// export const GetFetch = async(url) => {
//  const data=await fetch('http://localhost:5000/countOrder')
//  .then(res=>res.json()).then(data=> {
//     return data
//  })
// return {data};
// };



// export async function getStaticProps() {
//     const bannerres = await fetch('http://localhost:5000/banner')
//     const banner = await bannerres.json()
//     return {
//       props: {
//         banner,
//       },
//       revalidate: 60,
//     }
//   }

// import React from 'react';
// import { useState } from 'react';
// const GetFetch = (url) => {
// const [data, setData]= useState([])

// fetch('http://localhost:5000/countOrder')
//  .then(res=>res.json()).then(data=>{
//     setData(data)
//  })
// return [data, setData];
// };

// export default GetFetch;

// useEffect(() => {
//     async function getFetchValue(url) {
//      setState("LOADING")
//          try {
//              const response=await fetch('http://localhost:5000/countOrder')
//              const data= await response.json()
//              setData(data)
//              setState("SUCCESS")
//          } catch (err) {
//              setErrorMassage('ERROR FOUND')
//              setState("ERROR")
//          }
//      }
//  }, [url])