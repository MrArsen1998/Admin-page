import React, { useState } from 'react'

export default function Register() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const data ={username:username, password:password}
  const url = "http://localhost:3001/register";
  
  const register = ()=> {
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then(result => {
      console.log(result);
  })};

  return (
    <div className='register'>
      <label>Username</label>
      <input type="text" onChange={(e) => {
        setUsername(e.target.value);
      }}/>
      <label>Password</label>
      <input type="text" onChange={(e) => {
        setPassword(e.target.value);
      }}/>
      <button onClick={register}>Register</button>
    </div>
  )
}
