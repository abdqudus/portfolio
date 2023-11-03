"use client";
import { useSectionInView } from "@/lib/hooks";
import { SectionName } from "@/lib/types";
import React from "react";
type Props = {
  children: React.ReactNode;
  id: string;
  section: SectionName;
};
const SectionComponent = ({ children, id, section }: Props) => {
  const { ref } = useSectionInView(section);
  return (
    <section
      id={id}
      ref={ref}
      className="my-12 transition py-4 leading-normal max-w-[60rem] md:mx-auto"
    >
      {children}
    </section>
  );
};

export default SectionComponent;
