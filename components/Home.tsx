"use client";
import React from "react";
import Header from "./header";
import Intro from "./Intro";
import { useSectionInView } from "@/lib/hooks";

const Home = () => {
  const { ref } = useSectionInView("Home");
  return (
    <section ref={ref} id="home">
      <Header />
      <Intro />
    </section>
  );
};

export default Home;
