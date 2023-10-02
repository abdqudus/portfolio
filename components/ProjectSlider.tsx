"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Project } from "@/lib/data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const ProjectSlider = ({ projects }: { projects: readonly Project[] }) => {
  return (
    <Swiper
      cssMode={true}
      // navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      loop={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {projects.map((project) => (
        <SwiperSlide key={project.title}>
          <div className="flex flex-col gap-2 md:flex-row md:gap-4 justify-center items-center ">
            <div className="basis-1/2 ">
              <Image className="w-full" src={project.src} alt={project.title} />
            </div>
            <div className="basis-1/2 py-2 flex flex-col justify-between self-stretch">
              <h3 className="text-[1.3rem] md:text-[1.2rem] font-semibold uppercase">
                {project.title}
              </h3>
              <p className="text-[1.2rem] mt-2">{project.description}</p>
              <div className="bg-[#FCE09B] hover:scale-110 transition text-[#186F65] max-w-fit mt-4 px-4 py-2 rounded-[5px]">
                <a href={project.address} target="_blank">
                  Check it out
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSlider;
