import React from "react";
import { Routes, Route } from "react-router-dom";
import Menupage from "../menu/menupage";
import CartPage from "./cart";
import PaymentPage from "../menu/paymentpage";
import Navbar from "../navbar/navbar";
import About from "../pages/about";
import Contact from "../pages/contact";
import SignUpForm from "../signpage/signup";
import ThankYouPage from "../pages/thank";
import SignIn from "../signpage/testsignin";
import SignUp from "../signpage/testsignup";
function Allroute() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/menu/menupage" element={<Menupage />} />
      <Route path="/menu/menupage/paymentpage" element={<PaymentPage />} />
      <Route path="pages/thank" element={<ThankYouPage />} />
      <Route path="/testsignup/testsignin" element={<SignIn />} />
      <Route path="/testsignup" element={<SignUp />} />
    </Routes>
  );
}

export default Allroute;
