import React from 'react'
import { Link } from 'react-router-dom';
import { FiEye,FiEyeOff } from "react-icons/fi";
import { useState } from 'react';


const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [visiable,setVisible]=useState(false);
  
  return (
    <div className='flex items-center justify-center min-h-screen bg-slate-100'>
      <div className='drop-shadow-md  py-10 px-8 space-y-6 bg-gray-50 sm:w-[450px] w-full rounded-md'>
        <div className='text-xl text-center font-bold'>
          <p>Login to Your Account</p>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="Email" className='text-sm font-medium'>Email</label>
          <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='border-gray-300 border-2 outline-none focus:border-blue-500 rounded-md px-2 py-2 placeholder:text-sm' autoComplete='email' required/>
        </div>
        <div className='flex flex-col relative'>
          <label htmlFor="Password" className='text-sm font-medium'>Password</label>
          <input type={visiable?"text":"password"} name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className='border-gray-300 border-2 outline-none focus:border-blue-500 rounded-md px-2 py-2 placeholder:text-sm'/>
          <div className='absolute right-3 top-8 cursor-pointer text-lg' onClick={()=>setVisible(!visiable)}>{visiable?<FiEye />:<FiEyeOff />}</div>
        </div>
        <div className='flex justify-between text-sm'>
          <div className='flex items-center gap-1'>
            <input type="checkbox" name="remember-me" className='h-4 w-4'/>
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div className='text-blue-500 font-medium'>
            <Link to="/forgotpassword">Forgot Your password?</Link>
          </div>
        </div>
        <div>
          <button type="submit" className='w-full bg-blue-600 text-white rounded-md py-2 font-medium hover:bg-blue-700 transition duration-300'>Login</button>
        </div>
        <div>
          <p>Not have any account? <span className='text-blue-600'><Link to="/signup">Sign Up</Link></span></p>
        </div>
      </div>
    </div>
  )
}

export default Login;