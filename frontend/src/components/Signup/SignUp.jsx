import React from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [avatar,setAvatar]=useState(null);
  const [visiable, setVisible] = useState(false);

  const handleFileInput=(e)=>{
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="drop-shadow-md  py-10 px-8 space-y-6 bg-gray-50 sm:w-[450px] w-full rounded-md">
        <div className="text-xl text-center font-bold">
          <p>Resgister as a new Account</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="fullname" className="text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            name="text"
            id="fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="border-gray-300 border-2 outline-none focus:border-blue-500 rounded-md px-2 py-2 placeholder:text-sm"
            autoComplete="email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-gray-300 border-2 outline-none focus:border-blue-500 rounded-md px-2 py-2 placeholder:text-sm"
            autoComplete="email"
            required
          />
        </div>
        <div className="flex flex-col relative">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            type={visiable ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border-gray-300 border-2 outline-none focus:border-blue-500 rounded-md px-2 py-2 placeholder:text-sm"
          />
          <div
            className="absolute right-3 top-8 cursor-pointer text-lg"
            onClick={() => setVisible(!visiable)}
          >
            {visiable ? <FiEye /> : <FiEyeOff />}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8">
            {avatar?<img src={avatar} alt="user img" className="rounded-full object-cover w-full h-full"/>:<CgProfile className="h-8 w-8" />}
            
          </div>
          <div>
            <label
              htmlFor="fileInput"
              className="inline-block bg-transparent text-slate-800 px-4 py-2 rounded-md relative border cursor-pointer"
            >
              <span>Upload Profile</span>
              <input type="file" name="fileInput" id="fileInput" className="absolute left-1  text-black w-32 opacity-0 " onChange={handleFileInput} accept=".jpg,.jpeg,.png"/>
            </label>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md py-2 font-medium hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </div>
        <div>
          <p>
            Alredy have account?{" "}
            <span className="text-blue-600">
              <Link to="/login">Sign In</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
