import { IconType } from "react-icons";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
type Tech = {
  readonly name: string;
  readonly icon: IconType;
};
export const technologies: readonly Tech[] = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS", icon: IoLogoCss3 },
  { name: "Tailwind css", icon: SiTailwindcss },
  { name: "javascript", icon: SiJavascript },
  { name: "typescript", icon: SiTypescript },
  { name: "react", icon: FaReact },
  { name: "next js", icon: SiNextdotjs },
  { name: "Firebase", icon: SiFirebase },
  { name: "github", icon: BsGithub },
] as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
