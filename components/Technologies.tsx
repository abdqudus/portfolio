import React from "react";
import { technologies } from "../lib/data";
import SectionHeader from "./SectionHeader";
const Technologies = () => {
  return (
    <section className="mt-16">
      <SectionHeader title="Technologies i use" />
      <div className="flex justify-center px-8 pb-8 mt-16 gap-8 flex-wrap text-black">
        {technologies.map((tech) => (
          <div
            className="flex rounded-lg justify-center items-center gap-4 px-4 md:px-8 py-3 bg-[#FCE09B]"
            key={tech.name}
          >
            <tech.icon className="text-12" size={36} color="#186F65" />
            <p className=" text-[#186F65] uppercase text-[1.2rem]">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
