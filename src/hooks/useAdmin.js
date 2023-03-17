import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [power, setpower] = useState({ProductAdd: false, purches: false, orderlist: false, deleteProduct: false});
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect( () =>{
        const email = user?.email;
        if(email){
            fetch(`https://alientbd-version-2.onrender.com/api/user/${email}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('tmtoken')}`
                }
            })
            .then(res=>res.json())
            .then(data => {
                if (data.success) {
                    setAdmin(data.admin);
                    setpower(data.power); 
                }else{
                    setAdminLoading(false);
                }
               
            })
        }
    }, [user])
    setTimeout(() => {
        setAdminLoading(false)
      }, 100)
    return [admin, power,adminLoading]
};

export default useAdmin;