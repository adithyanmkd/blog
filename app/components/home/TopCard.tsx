import Image from "next/image";
import React from "react";

const TopCard = () => {
  return (
    <div className="px-6 pt-[42px]">
      <div className="flex flex-col rounded-md border border-[#DBDBDB] bg-white">
        <div className="mt-[18px] px-[17px]">
          <Image
            src={"/images/card-image.png"}
            width={293}
            height={200}
            alt="top card image"
          ></Image>
        </div>
        <div className="mt-[26px] px-[17px]">
          <p className="font-roboto text-[10px] font-bold text-[#333333]">
            DEVELOPMENT
            <span className="ml-[6px] font-medium text-[#999999]">
              16 March 2023
            </span>
          </p>
          <h3 className="mt-[18px] text-[22px] font-bold leading-[150%] text-[#333333]">
            How to make a Game look more attractive with New VR & AI Technology
          </h3>
          <p className="mt-5 text-xs leading-[160%] text-[#666666]">
            Google has been investing in AI for many years and bringing its
            benefits to individuals, businesses and communities. Whether it's
            publishing state-of-the everyone.
          </p>
          <button className="mb-6 mt-5 rounded-md border border-[#7C4EE4] px-5 py-[6px] text-[11px] font-bold text-[#7C4EE4]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
