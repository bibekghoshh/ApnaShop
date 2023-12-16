import React from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { server } from "../../server";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [visiable, setVisible] = useState(false);

  const handleFileInput = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`${server}/user/create-user`, { fullName, email, password, avatar })
      .then((res) => {
        toast.success(res.data.message);
        setFullName("");
        setEmail("");
        setPassword("");
        setAvatar();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <form
        className="drop-shadow-md  py-10 px-8 space-y-6 bg-gray-50 sm:w-[450px] w-full rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="text-xl font-bold text-center">
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
            className="px-2 py-2 border-2 border-gray-300 rounded-md outline-none focus:border-blue-500 placeholder:text-sm"
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
            className="px-2 py-2 border-2 border-gray-300 rounded-md outline-none focus:border-blue-500 placeholder:text-sm"
            autoComplete="email"
            required
          />
        </div>
        <div className="relative flex flex-col">
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
            className="px-2 py-2 border-2 border-gray-300 rounded-md outline-none focus:border-blue-500 placeholder:text-sm"
          />
          <div
            className="absolute text-lg cursor-pointer right-3 top-8"
            onClick={() => setVisible(!visiable)}
          >
            {visiable ? <FiEye /> : <FiEyeOff />}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8">
            {avatar ? (
              <img
                src={avatar}
                alt="user img"
                className="object-cover w-full h-full rounded-full"
              />
            ) : (
              <CgProfile className="w-8 h-8" />
            )}
          </div>
          <div>
            <label
              htmlFor="fileInput"
              className="relative inline-block px-4 py-2 bg-transparent border rounded-md cursor-pointer text-slate-800"
            >
              <span>Upload Profile</span>
              <input
                type="file"
                name="fileInput"
                id="fileInput"
                className="absolute w-32 text-black opacity-0 left-1 "
                onChange={handleFileInput}
                accept=".jpg,.jpeg,.png"
              />
            </label>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 font-medium text-white transition duration-300 bg-blue-600 rounded-md hover:bg-blue-700"
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
      </form>
    </div>
  );
};

export default SignUp;
