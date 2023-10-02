import React from "react";
import { technologies } from "../lib/data";
import SectionHeader from "./SectionHeader";
const Technologies = () => {
  return (
    <section className="mt-16">
      <SectionHeader title="Technologies i use" />
      <div className="flex  justify-center px-8 pb-8 mt-16 gap-8 flex-wrap ">
        {technologies.map((tech) => (
          <div className="flex flex-col items-center justify-center gap-2">
            <div
              className="rounded-full flex items-center justify-center w-[3.5em] h-[3.5em] bg-[#FCE09B]"
              key={tech.name}
            >
              <tech.icon className="text-12" size={36} color="#186F65" />
            </div>
            <p className=" text-[#FCE09B] uppercase text-[.75rem]">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
