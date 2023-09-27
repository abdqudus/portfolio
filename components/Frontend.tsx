"use client";
import { useState, useEffect, useLayoutEffect } from "react";
import { Easing, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import RotatingNameCircle from "./Rotating";

function FrontEnd() {
  const [scrollY, setScrollY] = useState(0);

  const controlElement1 = useAnimation();
  const controlElement2 = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    const animationProperties = {
      duration: 1,
      ease: "easeOut" as Easing,
    };

    const newX = scrollY * 1.3;

    controlElement1.start({ x: -newX }, animationProperties);
    controlElement2.start({ x: newX }, animationProperties);
  }, [scrollY, controlElement1, controlElement2]);

  return (
    <section className="px-8  mt-20 text-[#e5e7eb] cursor-default">
      {/* flex container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", delay: 1.75, duration: 0.5 }}
        className=" md:w-[80%] m-auto lg:m-0 lg:px-0 flex flex-col lg:flex-row md:gap-4  justify-center lg:justify-between "
      >
        {/* flex item 1 */}
        <motion.h1
          className="hover:text-orange-300 scroll-animated-element -mb-12 font-bold tracking-wide text-[25vw] md:text-[10.5rem] "
          initial={{ x: 0 }}
          animate={controlElement1}
        >
          Front
        </motion.h1>

        {/* flex item 2 */}
        <div className="flex items-center justify-center">
          <span className="lg:w-[200px] sm:w-[150px] w-[100px] h-[4px] -mb-[1.2rem] md:-mb-[2rem] bg-white "></span>
          <motion.h1
            className="hover:text-orange-300 font-bold tracking-wide scroll-animated-element text-[25vw] md:text-[10.5rem] "
            initial={{ x: 0 }}
            animate={controlElement2}
          >
            End
          </motion.h1>
        </div>
      </motion.div>
      <div className=" mt-8 lg:flex break-words flex-wrap lg:items-start items-center gap-16 lg:-mt-16 ">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", delay: 2, duration: 0.5 }}
          className=" hover:text-orange-300 lg:pl-[3rem] md:font-bold uppercase leading-none mb-16 text-[25vw] md:text-[9rem] lg:-mt-5 "
        >
          Developer
        </motion.h1>
        <motion.div
          initial={{ x: -350 }}
          animate={{ x: 0 }}
          transition={{ ease: "linear", duration: 1, delay: 0.75 }}
          className="hidden lg:block rounded-full w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] m-auto lg:rounded-none l lg:mr-2"
        >
          <Image
            className="hidden lg:block rounded-full object-cover lg:rounded-none lg:w-[250px] lg:h-[250px] "
            src="/fjxow.jpg"
            width={250}
            height={250}
            alt="my profile picture"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default FrontEnd;
