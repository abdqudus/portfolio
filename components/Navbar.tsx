"use client";
import React from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "./useCurrentSection";
import classnames from "tailwindcss-classnames";
const Navbar = () => {
  const { activeSection } = useActiveSectionContext();
  return (
    <nav
      className="
      bg-[#FCE09B] fixed top-0 w-full opacity-90 animate-drop z-10 backdrop-blur-[1rem]
      flex justify-center items-center p-4
      sm:w-[70%] sm:max-w-[700px] sm:left-1/2 sm:-translate-x-1/2 sm:top-8
      sm:rounded-[4rem] sm:animate-dropLarge
    "
    >
      <ul className="flex sm:justify-between sm:w-full sm:px-2 justify-center items-center gap-3 flex-wrap">
        {links.map((link) => {
          const styles= activeSection == link.name ? 
          "text-[#B2533E] text-[1.2rem] hover:text-[#B2533E] transition" : 
          "text-[1.2rem] hover:text-[#B2533E] transition text-[#186F65]" 
          return (

          
          <Link key={link.hash} href={link.hash}>
            <li
              className={styles}
            >
              {link.name}
            </li>
          </Link>
        )})}
      </ul>
    </nav>
  );
};

export default Navbar;
