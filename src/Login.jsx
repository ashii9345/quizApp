import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../src/login.css'

function Login() {
    let nav=useNavigate()
  let[name,setname]=useState("")
  let[password,setpassword]=useState("")
  function handleLogin(){
    if(name.trim()==""||password.trim()==""){
      return
    }
    if(name=="admin" && password==1234){
        nav('/admin')
    }else{
      nav('/qe')
    }
  }
  return (
    <div className='loginCo'>
    <div className='item'>
      <h2>Login</h2>
      <input type='text' placeholder='username'value={name}onChange={(e)=>setname(e.target.value)} ></input>
      
      <input type='text'placeholder='password'value={password} onChange={(e)=>setpassword(e.target.value)}></input>
      
      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
  )
}

export default Login