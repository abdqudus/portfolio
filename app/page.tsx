import About from "@/components/About";
import Home from "@/components/Home";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Header from "@/components/header";
import React from "react";

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Technologies />
      <Projects />
    </div>
  );
};

export default App;
