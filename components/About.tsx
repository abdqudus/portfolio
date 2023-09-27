"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import SectionComponent from "./SectionComponent";

const About = () => {
  const firstParagraphRef = useRef<HTMLParagraphElement | null>(null);
  const secondParagraphRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const elementsArray = [
      firstParagraphRef.current,
      secondParagraphRef.current,
    ];
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          entry.target.classList.toggle("text-white", entry.isIntersecting);
          entry.target.classList.toggle(
            "text-[#e5e7eb]",
            !entry.isIntersecting
          );
        }),
      { threshold: 1 }
    );
    elementsArray.forEach((element) => observer.observe(element!));
    return () => observer.disconnect();
  }, []);

  return (
    <SectionComponent>
      <SectionHeader title="About me" />

      <div className="lg:hidden rounded-full w-[250px] h-[250px] my-6  m-auto ">
        <Image
          className="lg:hidden rounded-full object-cover"
          src="/fjxow.jpg"
          width={250}
          height={250}
          alt="my profile picture"
        />
      </div>
      <p
        ref={firstParagraphRef}
        className="text-[#e5e7eb] transition duration-500 ease-linear mb-2 text-[1.2rem] leading-normal md:text-[1.5rem] text-center md:leading-relaxed"
      >
        Hello, I'm AbdQudus. I'm a Frontend Developer who's all about React and
        Next.js. I love building web stuff that works like a charm and looks
        fantastic.
      </p>
      <p
        ref={secondParagraphRef}
        className="text-[#e5e7eb] transition duration-500 ease-linear text-[1.2rem] leading-normal md:text-[1.5rem] text-center md:leading-relaxed"
      >
        Beyond coding, I'm a movie lover. Yep, I'm a big fan of great movies, so
        you'll often find me -when i'm not coding or learning new things-
        indoors, chilling with a good movie. 😁
      </p>
    </SectionComponent>
  );
};

export default About;
