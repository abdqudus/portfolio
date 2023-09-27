import React from "react";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <h3 className="text-[2rem] font-bold mb-4 text-center uppercase tracking-widest">
      {title}
    </h3>
  );
};

export default SectionHeader;
