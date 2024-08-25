import React, { useState } from 'react'

function SignUp() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const collectData=()=>{
        console.log(name,email,pass);
    }
  return (
    <div className='register'>
      <h1>Registration</h1>
      <input className='inputBox' type="text" placeholder="Enter Name"
        value={name} onChange={(e)=>setName(e.target.value)}
      />
      <input className='inputBox' type="text" placeholder="Enter email"
        value={email} onChange={(e)=>setEmail(e.target.value)}
      />
      <input className='inputBox' type="Password" placeholder="Enter Password"
        value={pass} onChange={(e)=>setPass(e.target.value)}
      />
      <button onClick={collectData} className='appButton' type='button'>SignUp</button>
    </div>
  )
}

export default SignUp
