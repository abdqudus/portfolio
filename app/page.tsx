import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Header from "@/components/header";
import React from "react";

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Technologies />
      <Projects />
    </div>
  );
};

export default App;
