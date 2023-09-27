import React from "react";
import { technologies } from "../lib/data";
import SectionHeader from "./SectionHeader";
const Technologies = () => {
  return (
    <section className="mt-16">
      <SectionHeader title="Technologies i use" />
      <div className="flex justify-center px-8 mt-16 gap-8 flex-wrap text-black">
        {technologies.map((tech) => (
          <div
            className="flex rounded-lg justify-center items-center gap-4 px-4 md:px-8 py-3 bg-[#e5e7eb]"
            key={tech.name}
          >
            <tech.icon className="text-12" size={36} />
            <p className="sm:text-[28px] uppercase text-[16px]">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
