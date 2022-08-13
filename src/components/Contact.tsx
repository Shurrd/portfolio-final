import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="px-8 lg:px-24 py-10 gap-20 flex flex-col" id="contact">
      <div className="md:w-2/3 xl:w-1/2 w-full">
        <p className="uppercase text-xs md:text-sm lg:text- text-[#a8a8e7]">
          Have a project to work on or just looking to hire?
        </p>
        <p className="lg:text-5xl text-4xl font-bold">Let's Work Together</p>
        <p className="text-gray-400 text-sm mt-7">
          Feel free to reach out if you're looking to hire, just want to connect
          or see if we can build something amazing together.
        </p>
      </div>
      <div className="md:w-2/3 xl:w-1/2 w-full">
        <a
          href="mailto: engraaadeyemi@gmail.com"
          className="uppercase text-sm flex items-center hover:gap-x-4 gap-x-2 duration-100 relative hover-effect hover:text-[#a8a8e7] w-max mb-2"
        >
          get in touch{" "}
          <span>
            <BsArrowRight />
          </span>
        </a>
        <p className="text-gray-400 text-sm">
          (or copy) engraaadeyemi@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
