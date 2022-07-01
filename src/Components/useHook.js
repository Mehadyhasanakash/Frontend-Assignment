import { useEffect, useState } from "react";

const useHook = ()=>{
    const [myuser, setUser] = useState([])
    useEffect( () =>{
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setUser(data))
    } ,[])
    return [myuser, setUser]
}

export default useHook;
