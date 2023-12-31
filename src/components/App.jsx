import React from "react";
import Home from "../screens/Home";
import LogIn from "../screens/LogIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import SignUp from "./../screens/Signup";
import { CartProvider } from "./ContextReducer";
import MyOrder from "../screens/MyOrder";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/myOrder" element={<MyOrder />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
