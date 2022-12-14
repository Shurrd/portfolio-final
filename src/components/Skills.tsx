import React from "react";
import { ISkills } from "../types/types";
import skills from "../utils/skills";

const Skills = () => {
  return (
    <div
      className="px-8 lg:px-24 py-10 lg:h-[100vh] flex flex-col gap-16"
      id="skills"
    >
      <div className="w-full md:w-[70%] flex flex-col gap-3">
        <p className="text-[#a8a8e7] text-sm">MY SKILLS</p>
        <p className="capitalize text-4xl font-bold mt-[-7px] mb-[5px]">
          The Technologies I work with
        </p>
        <p className="text-gray-500 text-sm lg:pr-36 pr-0">
          These are some of the skills I have worked with as developer and I am
          also currently learning <span className="font-bold">Flutter</span>.
          Here are some of the technologies I have been working on recently.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 place-items-start">
        {skills.map((skill, idx) => {
          const { name, icon }: ISkills = skill;
          const SkillIcon = icon;
          return (
            <div
              className="w-[4rem] hover:scale-125 duration-700 hover:text-[#a8a8e7]"
              key={idx}
            >
              <SkillIcon size={40} />
              <p className="mt-2 capitalize">{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
