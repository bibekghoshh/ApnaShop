import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Login, SignUp } from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
