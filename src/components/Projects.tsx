import React from "react";
import projects from "../utils/data";
import { IProject } from "../types/types";
import { BsArrowRight } from "react-icons/bs";

const Projects = () => {
  return (
    <div className="px-8 lg:px-24 py-10" id="projects">
      <div className="">
        <p className="text-[#a8a8e7] text-sm uppercase">My Projects</p>
        <p className="capitalize text-4xl font-bold mb-4">
          Some things i built
        </p>
        <p className="text-gray-500 text-sm">
          These are some of the projects I have worked on through the course of
          my learning.
        </p>
      </div>
      <div className="grid gap-20 md:gap-40 mt-14 place-items-center md:place-items-start">
        {projects.map((project) => {
          const { description, image, name, tools, id, github, url }: IProject =
            project;
          return (
            <div className={"flex flex-row justify-between w-full"} key={id}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="xl:w-[55%] lg:w-[60%] md:w-[85%]"
              >
                <div
                  className="md:h-[500px] h-[400px] border-black w-full bg-gray-900 hover:bg-black hover:border hover:border-gray-900 rounded-lg duration-200"
                  key={id}
                >
                  <img
                    src={image}
                    alt={name}
                    className="h-[40%] md:h-[55%] rounded-tl-lg rounded-tr-lg w-full"
                  />
                  <div className="h-[45%] flex flex-col gap-y-3 pt-6 px-5">
                    <p className="text-[#f1d2ffe8] text-sm font-bold">{name}</p>
                    <p className="text-xs text-start">{description}</p>
                    <div className="flex flex-wrap wrap gap-x-4 gap-y-1">
                      {tools.map((tool, idx) => (
                        <p className="text-xs text-gray-500" key={idx}>
                          {tool.label}.
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
              <div className="flex gap-x-5 absolute lg:mt-[455px] md:mt-[440px] mt-[360px] ml-5">
                <a
                  href={github}
                  className="text-sm flex items-center hover:gap-x-4 gap-x-2 duration-100 relative hover-effect hover:text-[#a8a8e7]"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>GitHub</span>
                  <span>
                    <BsArrowRight />
                  </span>
                </a>
                <a
                  href={url}
                  className="text-sm flex items-center gap-2 hover:gap-x-4 duration-100 relative hover-effect hover:text-[#a8a8e7]"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Website</span>
                  <span>
                    <BsArrowRight />
                  </span>
                </a>
              </div>
              <div className="hidden xl:w-[35%] lg:w-[20%] lg:flex flex-col justify-center items-center gap-32">
                <p className="text-6xl text-gray-600 font-bold">{id}</p>
                <p className="text-4xl text-gray-600 font-bold text-center">
                  {name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
