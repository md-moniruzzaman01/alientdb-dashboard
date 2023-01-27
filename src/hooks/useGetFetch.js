import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useGetFetch = (url) => {
    const [data, setData] = useState([])
    const [ErrorMassage, setErrorMassage] = useState(null)
    const [state, setState] = useState(null)

    useEffect(() => {
        setState("LOADING")
        fetch(url)
            .then(res => res.json()).then(data => {
                if (data.success) {
                    setData(data.data)
                    setState("SUCCESS")
                }else{
                    setState("fail")
                    setErrorMassage(data.data)
                }

            })
    }, [url])

    return [data,setData, ErrorMassage, state]

}

export default useGetFetch;