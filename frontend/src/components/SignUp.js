import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';

function SignUp() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error, setError] = useState(false);
    const navigate=useNavigate();
    useEffect(()=>{
      const auth=localStorage.getItem('user');
      if(auth){
        navigate("/")
      }
    })
    const collectData=async()=>{
      if(!name || !email || !password){
        setError(true);
        return false;
      }
        console.log(name,email,password);
        let result=await fetch("http://localhost:5000/register",{
          method:'post',
          body:JSON.stringify({name,email,password}),
          headers:{
              'Content-Type':'application/json'
          }
        });
        result=await result.json();
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result.result));
        localStorage.setItem("token",JSON.stringify(result.auth));
        navigate("/")

    }
  return (
    <div className='register'>
      <h1>Registration</h1>
      <input className='inputBox' type="text" placeholder="Enter Name"
        value={name} onChange={(e)=>setName(e.target.value)}
      />
      {error && !name && <span className='invalid-input'>*Enter valid name</span>}
      <input className='inputBox' type="text" placeholder="Enter email"
        value={email} onChange={(e)=>setEmail(e.target.value)}
      />
      {error && !email && <span className='invalid-input'>*Enter valid name</span>}
      <input className='inputBox' type="Password" placeholder="Enter Password"
        value={password} onChange={(e)=>setPassword(e.target.value)}
      />
      {error && !password && <span className='invalid-input'>*Enter valid name</span>}
      <button onClick={collectData} className='appButton' type='button'>SignUp</button>
    </div>
  )
}

export default SignUp
