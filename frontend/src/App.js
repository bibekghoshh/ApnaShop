import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, SignUp } from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loaduser } from "./redux/actions/user";

function App() {

  useEffect(()=>{
    Store.dispatch(loaduser());
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        pauseOnFocus
        hideProgressBar
      />
    </BrowserRouter>
  );
}

export default App;
