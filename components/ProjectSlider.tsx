import { Project } from "@/lib/data";
import Image from "next/image";
import React from "react";
type Props = {
  projects: readonly Project[];
};
const ProjectSlider = ({ projects }: Props) => {
  return (
    <div className="px-8">
      <div className="flex overflow-auto has-scrollbar  snap-x py-3 snap-mandatory gap-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="grid gap-4 sm:grid-cols-2 flex-shrink-0 basis-full snap-start"
          >
            <div>
              <Image
                src={project.src}
                alt={project.description}
                width={1312}
                height={592}
              />
            </div>
            <div className="sm:p-4">
              <h3 className="mb-4 uppercase text-[#FCE09B] font-bold">
                {project.title}
              </h3>
              <p className="text-[#FCE09B] ">{project.description}</p>
              <div className="bg-[#FCE09B]  hover:scale-110 transition text-[#186F65] max-w-fit mt-5 px-4 py-2 rounded-[5px]">
                <a href={project.address} target="_blank">
                  Check it out
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
