import React from "react";

interface propType {
  heading: string;
}

const HeadingAndBtn = ({ heading }: propType) => {
  return (
    <div className="mt-[60px] flex items-center justify-between px-6">
      <div>
        <h4 className="text-xl font-bold text-[#333333]">{heading}</h4>
      </div>
      <div>
        <button className="rounded-md bg-[#7C4EE4] px-[34px] py-[11px] text-[10px] font-bold text-white">
          View All
        </button>
      </div>
    </div>
  );
};

export default HeadingAndBtn;
