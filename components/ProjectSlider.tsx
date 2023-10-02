"use client";
import React, { useState } from "react";
import { Project } from "@/lib/data";
import Image from "next/image";
import { GrPrevious } from "react-icons/gr";
import { FcNext } from "react-icons/fc";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import { variants } from "@/utils";
const ProjectSlider = ({ projects }: { projects: readonly Project[] }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const projectIndex = wrap(0, projects.length, page);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween" },
            opacity: { duration: 0.2 },
          }}
          className="absolute top-[5px] rounded-lg text-[#186F65] bg-[#FCE09B] sm:top-0 p-4 flex gap-6 justify-between items-center flex-col sm:flex-row "
        >
          <div className="w-full">
            <Image
              src={projects[projectIndex].src}
              alt={projects[projectIndex].description}
              className="max-w-full rounded-[5px]"
              priority
            />
          </div>
          <div className="self-stretch">
            <h3 className="text-[1.3rem] md:text-[1.2rem] font-semibold uppercase">
              {projects[projectIndex].title}
            </h3>
            <p className="text-[1.2rem] mt-2">
              {projects[projectIndex].description}
            </p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-[#FCE09B] bg-[#186F65] max-w-fit mt-4 px-4 py-2 rounded-[5px]"
            >
              <a href={projects[projectIndex].address} target="_blank">
                Check it out{" "}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div
        className="absolute top-3/4 sm:top-1/2 sm:-translate-y-1/2 -right-10  cursor-pointer"
        onClick={() => paginate(1)}
      >
        <Image src="/next.png" alt="next" width={32} height={32} />
      </div>
      <div
        className="absolute top-3/4 sm:top-1/2 sm:-translate-y-1/2 -left-10 cursor-pointer"
        onClick={() => paginate(-1)}
      >
        <Image src="/left-arrow.png" alt="previous" width={32} height={32} />
      </div>
    </>
  );
};

export default ProjectSlider;
