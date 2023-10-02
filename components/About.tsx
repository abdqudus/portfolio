"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import SectionComponent from "./SectionComponent";
import Button from "./Button";

const About = () => {
  const firstParagraphRef = useRef<HTMLParagraphElement | null>(null);
  const secondParagraphRef = useRef<HTMLParagraphElement | null>(null);

  // useEffect(() => {
  //   const elementsArray = [
  //     firstParagraphRef.current,
  //     secondParagraphRef.current,
  //   ];
  //   const observer = new IntersectionObserver(
  //     (entries) =>
  //       entries.forEach((entry) => {
  //         entry.target.classList.toggle("text-[#FCE09B]", entry.isIntersecting);
  //         entry.target.classList.toggle(
  //           "text-[#B2533E]",
  //           !entry.isIntersecting
  //         );
  //       }),
  //     { threshold: 1 }
  //   );
  //   elementsArray.forEach((element) => observer.observe(element!));
  //   return () => observer.disconnect();
  // }, []);

  return (
    <SectionComponent>
      <SectionHeader title="About me" />
      <p
        ref={firstParagraphRef}
        className="text-[#FCE09B] transition duration-500 ease-linear mb-2 text-[1.2rem] leading-normal md:text-[1.5rem] text-center md:leading-relaxed"
      >
        About two years ago, I ventured into the world of programming. It's been
        a journey filled with challenges and, truth be told, that's where the
        excitement lies.
      </p>
      <p className="text-[#FCE09B] transition duration-500 ease-linear mb-2 text-[1.2rem] leading-normal md:text-[1.5rem] text-center md:leading-relaxed">
        My go-to tools for web development are React and Next.js, backed by
        TypeScript for rock-solid reliability. I'm enthusiastic about embracing
        new technologies.
      </p>
      <p
        ref={secondParagraphRef}
        className="text-[#FCE09B] transition duration-500 ease-linear text-[1.2rem] leading-normal md:text-[1.5rem] text-center md:leading-relaxed"
      >
        Beyond coding, I'm a movie lover. Yep, I'm a big fan of great movies, so
        you'll often find me -when i'm not coding or learning new things-
        indoors, chilling with a good movie. 😁
      </p>
    </SectionComponent>
  );
};

export default About;