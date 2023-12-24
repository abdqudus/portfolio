import React from "react";
import { technologies } from "../lib/data";
import SectionHeader from "./SectionHeader";
import SectionComponent from "./SectionComponent";
const Technologies = () => {
  return (
    <SectionComponent id="skills" section="Skills">
      <SectionHeader title="Technologies i use" />
      <div className="flex px-8  justify-center  pb-8 mt-16 gap-8 flex-wrap ">
        {technologies.map((tech) => (
          <div  key={tech.name} className="flex flex-col items-center justify-center gap-2">
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
    </SectionComponent>
  );
};

export default Technologies;
