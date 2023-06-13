import React from "react";

import Header from "./Header/Header";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Locations from "./Locations/Locations";
import Menu from "./Menu/Menu";
import Portfolio from "./Portfolio/Portfolio";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
};

export default App;
