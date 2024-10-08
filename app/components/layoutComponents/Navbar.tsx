import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-5">
      <div>
        <Image
          className="cursor-pointer"
          src={"/icons/logo.svg"}
          width={32}
          height={32}
          alt="logo"
        ></Image>
      </div>
      <div>
        <Image
          className="cursor-pointer"
          src={"/icons/menu.svg"}
          width={30}
          height={30}
          alt="menu icon"
        ></Image>
      </div>
    </div>
  );
};

export default Navbar;
