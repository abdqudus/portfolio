import React from "react";
import { projects } from "@/lib/data";
import ProjectSlider from "./ProjectSlider";
import SectionHeader from "./SectionHeader";
import SectionComponent from "./SectionComponent";
const Projects = () => {
  return (
    <SectionComponent>
      <SectionHeader title="my previous projects" />
      <div className=" mt-8 relative w-full md:w-[95%] h-[250px] flex items-center justify-center  mx-auto">
        <ProjectSlider projects={projects} />
      </div>
    </SectionComponent>
  );
};

export default Projects;
