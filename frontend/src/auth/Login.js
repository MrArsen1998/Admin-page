import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [user, setUser] = useState({username:"", password:""})
    const url = "http://localhost:3001/login";
    const navigate = useNavigate();
    const login = ()=> {
      fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
    },
        body: JSON.stringify(user)
      })
      .then((response) => response.json())
      .then(result => {
        console.log(result);
        localStorage.setItem("token",result.jwt)
        if(result.isAdmin === 1){
            navigate("/admin")
        }else{
            navigate("/")
        }
    })};
    return (
        <div className='login'>
            <input type ="text" onChange={(e)=>setUser({...user, username:e.target.value})} placeholder="Username"/>
            <input type ="password" onChange={(e)=>setUser({...user, password:e.target.value})} placeholder="Password"/>
            <button onClick={login}>Login</button>
        </div>
    )
}


