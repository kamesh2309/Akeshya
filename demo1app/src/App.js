import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutAs/AboutUs";
import Services from "./components/Services/Services";
import MoreServices from "./components/MoreServices/MoreServices";
import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Brand from "./components/Brand/Brand";
import Header from "./components/header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/home" element={<Hero />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
