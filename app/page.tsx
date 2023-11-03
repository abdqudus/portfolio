import About from "@/components/About";
import ContactMe from "@/components/Contact";
import Home from "@/components/Home";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/components/useCurrentSection";
import React from "react";

const App = () => {
  return (
    <div>
      <ActiveSectionContextProvider>
        <Home />
        <About />
        <Technologies />
        <Projects />
        <ContactMe />
      </ActiveSectionContextProvider>
    </div>
  );
};

export default App;
