import React from "react";
import { croissant } from "@/app/layout";
const Navbar = () => {
  return (
    <nav className="flex mb-0 justify-between p-8 items-center">
      <p
        className={`${croissant.className} text-2xl animate-drop font-[400] uppercase md:font-[48]`}
      >
        AbdQudus
      </p>
      <div className="flex flex-col gap-3">
        <span className="w-[40px] h-[2px] bg-white"></span>
        <span className="w-[40px] h-[2px] bg-white"></span>
      </div>
      <p className={`${croissant.className} hidden animate-drop sm:block`}>
        Time
      </p>
    </nav>
  );
};

export default Navbar;
