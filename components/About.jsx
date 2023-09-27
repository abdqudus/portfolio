"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const firstParagraphRef = useRef();
  const secondParagraphRef = useRef();

  useEffect(() => {
    const arr = [firstParagraphRef.current, secondParagraphRef.current];
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          entry.target.classList.toggle("text-white", entry.isIntersecting);
          entry.target.classList.toggle(
            "text-emerald-900",
            !entry.isIntersecting
          );
        }),
      { threshold: 1 }
    );
    arr.forEach((ele) => observer.observe(ele));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mt-8 px-8 py-4 leading-normal max-w-[45rem] md:m-auto">
      <h3 className="text-[2rem] font-extrabold mb-4 text-center uppercase tracking-widest">
        About me
      </h3>
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
        className="text-emerald-900 transition duration-500 ease-linear mb-2 text-[1.2rem] leading-normal md:text-[1.5rem] text-center md:leading-relaxed"
      >
        Hello, I'm AbdQudus. I'm a Frontend Developer who's all about React and
        Next.js. I love building web stuff that works like a charm and looks
        fantastic.
      </p>
      <p
        ref={secondParagraphRef}
        className="text-emerald-900 transition duration-500 ease-linear text-[1.2rem] leading-normal md:text-[1.5rem] text-center md:leading-relaxed"
      >
        Beyond coding, I'm a movie lover. Yep, I'm a big fan of great movies, so
        you'll often find me -when i'm not coding or learning new things-
        indoors, chilling with a good movie. 😁
      </p>
    </section>
  );
};

export default About;
