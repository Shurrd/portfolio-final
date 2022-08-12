import React from "react";
import projects from "../utils/data";
import { IProject } from "../types/types";

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
      <div>
        {projects.map((project) => {
          const { description, image, name, tools, id, github, url }: IProject =
            project;
          return (
            <div>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
