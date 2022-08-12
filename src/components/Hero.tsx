import React from "react";
import Computer from "../images/computer.png";
import { IProps } from "../types/types";

const Hero = ({ menu }: IProps) => {
  return (
    <div className="flex px-7 xl:px-28 lg:px-24 h-[100vh] items-center">
      <div className="flex-1 gap-1 flex flex-col mt-4">
        <p className="uppercase text-[#a8a8e7] text-sm font-bold">
          Hi guys , I am
        </p>
        <p className="text-4xl font-bold">Adeyemi Abraham</p>
        <p className="text-sm text-gray-500 font-semibold mt-3">
          A Nigerian based self taught Front-End React Developer and an aspiring
          Mobile App developer who is specialized in building exceptional
          responsive websites for better experience
        </p>
        <a
          href="mailto: engraaadeyemi@gmail.com"
          className={menu ? "w-max hire-btn btn" : "hidden"}
        >
          Hire Me
        </a>
      </div>
      <div className="hidden md:block flex-1">
        <img src={Computer} alt="computer" />
      </div>
    </div>
  );
};

export default Hero;
