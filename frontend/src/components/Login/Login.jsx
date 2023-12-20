import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";
import {server} from "../../server";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiable, setVisible] = useState(false);
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `${server}/user/login-user`,
        { email, password },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Login success !");
        navigate("/");
        window.location.reload(true);
      }).catch((err)=>{
        toast.error(err.response.data.message);
      })
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <form
        className="drop-shadow-md  py-10 px-8 space-y-6 bg-gray-50 sm:w-[450px] w-full rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="text-xl font-bold text-center">
          <p>Login to Your Account</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="Email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-2 py-2 border-2 border-gray-300 rounded-md outline-none focus:border-blue-500 placeholder:text-sm"
            autoComplete="email"
            required
          />
        </div>
        <div className="relative flex flex-col">
          <label htmlFor="Password" className="text-sm font-medium">
            Password
          </label>
          <input
            type={visiable ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="px-2 py-2 border-2 border-gray-300 rounded-md outline-none focus:border-blue-500 placeholder:text-sm"
          />
          <div
            className="absolute text-lg cursor-pointer right-3 top-8"
            onClick={() => setVisible(!visiable)}
          >
            {visiable ? <FiEye /> : <FiEyeOff />}
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <div className="flex items-center gap-1">
            <input type="checkbox" name="remember-me" className="w-4 h-4" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div className="font-medium text-blue-500">
            <Link to="/forgotpassword">Forgot Your password?</Link>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 font-medium text-white transition duration-300 bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </div>
        <div>
          <p>
            Not have any account?{" "}
            <span className="text-blue-600">
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
