import { IconType } from "react-icons";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import letsChat from "../public/chat-app.png";
import easyShare from "../public/easy-share.png";
import interactiveBoard from '../public/interactive board.png'
import crown from "../public/crown.png";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { StaticImageData } from "next/image";
type Tech = {
  readonly name: string;
  readonly icon: IconType;
};
export type Project = {
  title: string;
  src: StaticImageData;
  description: string;
  address: string;
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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projects: readonly Project[] = [
  {
    title: "letsChat",
    src: letsChat,
    description:
      "This is a simple chat app that enables users send and receive messages in real time.",
    address: "https://abdquduschatapp.netlify.app/",
  },
  {
    title: "easy share",
    src: easyShare,
    description:
      "This is an app that enables a users upload files and then gets link that allows for the download of the file.",
    address: "https://abdqudus-easyshare.netlify.app/",
  },
  {
    title: "interactive board share",
    src: interactiveBoard,
    description:
      "This is an app that allows users to draw on boards and share with others in real time ",
    address: "https://interactive-board-seven.vercel.app/",
  },
] as const;
