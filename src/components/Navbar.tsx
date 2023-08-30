import React from "react";
import navItems from "../utils/navItems";
import Bitmoji from "../images/bitmoji.png";
import icons from "../utils/icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { INav, IProps } from "../types/types";

const Navbar = ({ menu, handleMenu }: IProps) => {
  return (
    <nav
      className={
        menu
          ? "bg-gray-800 lg:w-[85%] w-[95%] h-14 mx-auto rounded-md mt-3 flex justify-between items-center px-5"
          : "bg-gray-800 w-full h-[100vh] mx-auto left-0 right-0 flex justify-between items-center lg:w-[85%] md:w-[95%] md:h-14 md:rounded-md md:mt-3 md:px-5 px-8 md:pt-0 pt-5 md:items-center md:sticky fixed z-50"
      }
    >
      <a href="/" className={menu ? "h-max" : "h-max mb-[37rem] md:mb-0"}>
        <img src={Bitmoji} alt="abraham" className="w-[3.5rem] rounded-full" />
      </a>
      <div
        className={
          menu
            ? "md:flex md:items-center hidden md:justify-between md:w-[70%]"
            : "flex md:flex-row flex-col items-center justify-center h-max md:justify-between md:w-[70%] md:gap-0 gap-32"
        }
      >
        <div
          className={
            menu
              ? "md:flex gap-10 hidden "
              : "flex md:flex-row flex-col gap-10 "
          }
        >
          {navItems.map((item) => {
            const { id, name, url }: INav = item;
            return (
              <a href={url} key={id}>
                <p className="text-gray-300 font-semibold md:block relative w-max hover-effect hover:text-[#a8a8e7]">
                  {name}
                </p>
              </a>
            );
          })}
        </div>
        <div
          className={
            menu ? "md:flex gap-10" : "flex gap-14 md:order-last order-first"
          }
        >
          {icons.map((icon, idx) => {
            const Icon = icon.name;
            return (
              <a href={icon.url} key={idx}>
                <p className="text-gray-300 md:block hover:text-[#a8a8e7]">
                  <Icon size={18} />
                </p>
              </a>
            );
          })}
        </div>
      </div>
      <div
        className={
          menu
            ? "md:hidden h-max cursor-pointer text-gray-300 animate-pulse"
            : "md:hidden h-max cursor-pointer md:mb-0 mb-[37rem] text-gray-300 animate-pulse"
        }
        onClick={handleMenu}
      >
        {menu ? <GiHamburgerMenu size={30} /> : <AiOutlineClose size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;
