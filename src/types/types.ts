import { IconType } from "react-icons";

export interface IProject {
  id: number;
  name: string;
  github: string;
  url: string;
  image: string;
  description: string;
  tools: {
    label: string;
  }[];
}

export interface IProps {
  menu: boolean;
  handleMenu?: () => void;
}

export interface INav {
  id: number;
  name: string;
  url: string;
}

export interface ISkills {
  name: string;
  icon: IconType;
}
