import React from "react";

type ButtonProps = {
  label: string;
  classname?: string;
};

const Button: React.FC<ButtonProps> = ({ label, classname = "" }) => {
  return (
    <div>
      <button
        className={`mt-[26px] rounded-md bg-[#7C4EE4] px-8 py-3 text-xs font-bold text-white ${classname}`}
      >
        {label}
      </button>
      ;
    </div>
  );
};

export default Button;
