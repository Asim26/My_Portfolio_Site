import React from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import About from "./screens/about";
import Services from "./screens/services";
import Contact from "./screens/contact";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
