import React from "react";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <h3 className="text-[2rem] bg-gradient-to-r from-[#B2533E] to-[#FCE09B] bg-clip-text text-transparent font-bold mb-4 text-center uppercase tracking-widest">
      {title}
    </h3>
  );
};

export default SectionHeader;
