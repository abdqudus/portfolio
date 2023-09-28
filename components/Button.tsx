import React, { ReactNode } from "react";
type Props = {
  text: string;
  icon: ReactNode;
};
const Button = ({ text, icon }: Props) => {
  return (
    <div className="px-6 py-3 bg-[#FCE09B] text-[#186F65] flex justify-center items-center gap-2 hover: rounded-full font-semibold text-[1.5rem]">
      <button>{text}</button>
      {icon}
    </div>
  );
};

export default Button;
