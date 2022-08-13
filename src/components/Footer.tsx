import React from "react";
import { BsArrowUp } from "react-icons/bs";
import icons from "../utils/icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-8 lg:px-24 py-5 bg-gray-800 flex justify-between items-center text-xs">
      <p>&copy; {new Date().getFullYear()} Adeyemi Abraham</p>
      <div className="flex gap-6 md:gap-10 items-center">
        {icons.map((icon, idx) => {
          const Icon = icon.name;
          return (
            <a
              href={icon.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#a8a8e7]"
              key={idx}
            >
              <Icon size={20} />
            </a>
          );
        })}
        <p
          className="flex items-center cursor-pointer gap-2 hover:text-[#a8a8e7] hover:scale-[1.05]"
          onClick={scrollToTop}
        >
          back to top <BsArrowUp />
        </p>
      </div>
    </div>
  );
};

export default Footer;
