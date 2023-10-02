import React from "react";
import { projects } from "@/lib/data";
import ProjectSlider from "./ProjectSlider";
import SectionHeader from "./SectionHeader";
import SectionComponent from "./SectionComponent";
const Projects = () => {
  return (
    <SectionComponent id="projects">
      <SectionHeader title="my previous projects" />
      <ProjectSlider projects={projects} />
    </SectionComponent>
  );
};

export default Projects;
