import { useEffect, useState } from "react"
import { toast } from "react-toastify";

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://alientbd-version-2.onrender.com/api/user/${email}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log("useToken",data);
                    if (data.success) {
                        const accessToken = data.data;
                        localStorage.setItem('tmtoken', accessToken);
                        setToken(accessToken);
                    }else{
                        toast(data?.message)
                    }

                })
        }

    }, [user]);
    return [token];
}

export default useToken;




