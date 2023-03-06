import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/header";
import Home from "./Pages/Home/home";
import Reserve from "./Pages/Reserve/reserve";
import AboutUs from "./Pages/About/about";
import ContactUs from "./Pages/Contact/contact";
import Menu from "./Pages/Menu/menu";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/reserve" element={<Reserve />} />
        </>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
