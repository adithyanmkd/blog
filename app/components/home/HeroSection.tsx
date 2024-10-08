import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full bg-[#7C4EE4] py-[42px] pl-6 pr-12">
      <div>
        <p className="text-xs font-bold text-white">Featured Post</p>
        <h1 className="text-4xl font-bold leading-[120%] text-white">
          How AI Will Change the Future
        </h1>
        <p className="mt-[19px] text-xs leading-[160%] text-white">
          The future of AI will see home robots having enhanced intelligence,
          increased capabilities, and becoming more personal and possibly cute.
          For example, home robots will overcome navigation, direction
        </p>
        <button className="mt-[26px] rounded-md bg-white px-8 py-3 text-xs font-bold text-[#373737]">
          Read more
        </button>
      </div>
      <div className="mt-14">
        <Image
          src={"/images/heroSection.png"}
          width={327}
          height={330}
          alt="hero section image"
        ></Image>
      </div>
    </div>
  );
};

export default HeroSection;
