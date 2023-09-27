import React from "react";
import Navbar from "./Navbar";
import FrontEnd from "./Frontend";
import RotatingSection from "./Rotating";
const Header = () => {
  return (
    <header className="overflow-hidden ">
      <Navbar />
      <FrontEnd />
      <RotatingSection />
    </header>
  );
};

export default Header;