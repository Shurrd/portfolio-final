import React, { useState } from "react";
import navItems from "../utils/navItems";
import Abraham from "../images/abraham.jpg";
import icons from "../utils/icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 lg:w-[85%] w-[95%] h-14 mx-auto rounded-md mt-3 flex justify-between items-center px-5">
      <a href="/">
        <img src={Abraham} alt="" className="w-[2rem] rounded-full" />
      </a>
      <div className="flex gap-10">
        {navItems.map((item) => (
          <a href={item.url} key={item.id}>
            <p className="text-gray-300 font-semibold md:block hidden relative hover-effect hover:text-[#a8a8e7]">
              {item.name}
            </p>
          </a>
        ))}
      </div>
      <div className="flex gap-10">
        {icons.map((icon, idx) => {
          const Icon = icon.name;
          return (
            <a href={icon.url}>
              <p className="text-gray-300 md:block hidden hover:text-[#a8a8e7]">
                <Icon />
              </p>
            </a>
          );
        })}
      </div>
      <div
        className="md:hidden block cursor-pointer text-gray-300"
        onClick={handleMenu}
      >
        {menu ? <GiHamburgerMenu size={25} /> : <AiOutlineClose size={25} />}
      </div>
    </nav>
  );
};

export default Navbar;
