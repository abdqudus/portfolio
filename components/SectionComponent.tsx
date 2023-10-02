import React from "react";
type Props = {
  children: React.ReactNode;
};
const SectionComponent = ({ children }: Props) => {
  return (
    <section className="my-12 px-8 py-4 leading-normal max-w-[60rem] md:mx-auto">
      {children}
    </section>
  );
};

export default SectionComponent;
