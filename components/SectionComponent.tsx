import React from "react";
type Props = {
  children: React.ReactNode;
  id: string;
};
const SectionComponent = ({ children, id }: Props) => {
  return (
    <section
      id={id}
      className="my-12 transition px-8 py-4 leading-normal max-w-[60rem] md:mx-auto"
    >
      {children}
    </section>
  );
};

export default SectionComponent;
