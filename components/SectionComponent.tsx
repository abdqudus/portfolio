import React from "react";

const SectionComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="my-12 px-8 py-4 leading-normal max-w-[45rem] md:m-auto">
      {children}
    </section>
  );
};

export default SectionComponent;
