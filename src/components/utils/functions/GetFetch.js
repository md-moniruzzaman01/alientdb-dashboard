

















// export const GetFetch = async(url) => {
//  const data=await fetch('https://alientbd-version-2.onrender.com/countOrder')
//  .then(res=>res.json()).then(data=> {
//     return data
//  })
// return {data};
// };



// export async function getStaticProps() {
//     const bannerres = await fetch('https://alientbd-version-2.onrender.com/banner')
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

// fetch('https://alientbd-version-2.onrender.com/countOrder')
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
//              const response=await fetch('https://alientbd-version-2.onrender.com/countOrder')
//              const data= await response.json()
//              setData(data)
//              setState("SUCCESS")
//          } catch (err) {
//              setErrorMassage('ERROR FOUND')
//              setState("ERROR")
//          }
//      }
//  }, [url])