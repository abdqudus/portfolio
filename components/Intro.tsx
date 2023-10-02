import Image from "next/image";
import React from "react";
import Button from "./Button";
import { RiContactsFill } from "react-icons/ri";
import { BsDownload, BsLinkedin } from "react-icons/bs";
import { FaGitSquare } from "react-icons/fa";

import Link from "next/link";
const Intro = () => {
  return (
    <section className="mt-[9rem] w-[80%] md:w-[65%] m-auto">
      <div className="border-[#FCE09B] border-4 relative rounded-full w-[200px] h-[200px] my-6  mx-auto ">
        <Image
          className="rounded-full object-cover "
          src="/fjxow.jpg"
          width={200}
          height={200}
          quality="95"
          priority={true}
          alt="my profile picture"
        />
        <p className="absolute bottom-0 right-2 text-[2.5rem]">👋</p>
      </div>
      <h1 className="text-center text-[#FCE09B] text-[1.5rem]">
        Hello, I'm
        <span className="font-bold tracking-widest uppercase">
          {" "}
          AbdQudus{" "}
        </span>{" "}
        I'm a{" "}
        <span className="font-semibold tracking-wider">
          frontend developer.
        </span>{" "}
        I enjoy building beautiful, performant, responsive and accessible
        websites. My focus -for now- is React and Next.js.
      </h1>
      <div className="flex flex-col mt-6 gap-6 items-center justify-center sm:flex-row sm:flex-wrap">
        <div className="px-6 py-3 bg-[#FCE09B] hover:bg-[#B5CB99]  text-[#186F65] flex justify-center items-center gap-2 hover:scale-[1.2] transition rounded-full font-semibold text-[1rem] sm:text-[1.2rem] ">
          <Link href="#contact">Contact me</Link>
          <RiContactsFill size={30} color={"#186F65"} />
        </div>
        <div className="px-6 py-3 hover:bg-[#B5CB99]  bg-[#FCE09B] hover: text-[#186F65] flex justify-center items-center gap-2 hover: rounded-full font-semibold text-[1rem] hover:scale-[1.2] transition  sm:text-[1.2rem]">
          <a href="#contact">Download My CV</a>
          <BsDownload size={30} />
        </div>
        <div className="w-[60px] hover:bg-[#B5CB99]  cursor-pointer h-[60px] rounded-full bg-[#FCE09B] justify-center items-center flex hover:scale-[1.2] transition ">
          <a
            href="https://www.linkedin.com/in/abdqudus-gbadamosi/"
            target="_blank"
            title="Reach me on LinkedIn"
          >
            <BsLinkedin size={30} color={"#186F65"} />
          </a>
        </div>
        <div className="w-[60px] cursor-pointer h-[60px] hover:bg-[#B5CB99] rounded-full bg-[#FCE09B] justify-center items-center flex hover:scale-[1.2] transition ">
          <a
            href="https://github.com/abdqudus"
            target="_blank"
            title="Check out my github"
          >
            <FaGitSquare size={30} color={"#186F65"} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
