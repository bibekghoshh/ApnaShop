import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, SignUp,HomePage } from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadUser } from "./redux/actions/user";
import ProductsPage from "./pages/ProductsPage";

function App() {

  useEffect(()=>{
    Store.dispatch(loadUser());
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/products" element={<ProductsPage/>}/>

        <Route path="/best-selling" element={}/>

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
