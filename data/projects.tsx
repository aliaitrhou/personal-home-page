// TODO: Use a CMS for this:
import { FaDocker, FaNodeJs } from "react-icons/fa";
import { FaNodeJs as FaNodeJs6 } from "react-icons/fa6";
import {
  RiDatabase2Fill,
  RiNextjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
  RiSupabaseFill,
  RiTerminalBoxFill,
} from "react-icons/ri";
import {
  SiClerk,
  SiPrisma,
  SiExpress,
  SiChakraui,
  SiOpenai,
  SiExpo,
  SiLangchain,
  SiHomebrew,
} from "react-icons/si";
import { DiRedis, DiSqllite } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaKey } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { PiTerminalWindowFill } from "react-icons/pi";
import { ReactNode } from "react";

export interface ToolItem {
  icon: ReactNode;
  title: string;
}

export interface ProjectMeta {
  slug: string;
  name: string;
  year: string;
  platform: string;
  tools: ToolItem[];
  hosting: string;
  website?: string;
  sourceCode?: string;
}

export const projectsData: ProjectMeta[] = [
  {
    slug: "shell-agent",
    name: "Shell Agent",
    year: "2025",
    platform: "Web Application",
    tools: [
      { icon: <FaNodeJs className="size-3" />, title: "NodeJs" },
      { icon: <RiNextjsFill className="size-3" />, title: "NextJs" },
      { icon: <SiClerk />, title: "Clerk" },
      { icon: <SiPrisma className="size-3" />, title: "PrismaORM" },
      { icon: <FaDocker className="size-4" />, title: "Docker" },
      { icon: <DiRedis className="size-4" />, title: "Redis" },
      { icon: <RiDatabase2Fill className="size-3" />, title: "NeonDB" },
    ],
    hosting: "Deployed using Digital Ocean.",
    website: "https://shellagent.dev/",
    sourceCode: "https://github.com/aliaitrhou/shell-agent",
  },
  {
    slug: "jarvis-ai",
    name: "Jarvis AI",
    year: "2024",
    platform: "IOS, Android",
    tools: [
      {
        icon: <TbBrandReactNative className="size-3" />,
        title: "React Native",
      },
      { icon: undefined, title: "Native Base" },
      { icon: <FaNodeJs6 className="size-3" />, title: "NodeJs" },
      { icon: <SiExpo className="size-3" />, title: "Expo" },
      { icon: <SiLangchain className="size-4" />, title: "Langchain" },
      { icon: <SiOpenai className="size-3" />, title: "OpenAI-Node" },
      { icon: <RiSupabaseFill className="size-3" />, title: "Supabase" },
    ],
    hosting: "Not deployed to app stores.",
    sourceCode: "https://github.com/aliaitrhou/jarvis-ai",
  },
  {
    slug: "youtube-transcriber",
    name: "Youtube Transcriber",
    status: "Active",
    year: "2024",
    platform: "Web Application",
    tools: [
      { icon: <FaNodeJs6 className="size-3" />, title: "NodeJs" },
      { icon: <RiNextjsFill className="size-3" />, title: "NextJs" },
      { icon: <SiOpenai className="size-3" />, title: "OpenAI-Python" },
      { icon: <SiChakraui />, title: "ChakraUI" },
    ],
    hosting: "Deployed to internet using Render.",
    website: "https://vidotrans.onrender.com",
    sourceCode: "https://github.com/aliaitrhou/youtube-transcriber",
  },
  {
    slug: "note-book",
    name: "Markdown Note Book",
    year: "2024",
    platform: "Desktop",
    tools: [
      {
        icon: <TbBrandReactNative className="size-3" />,
        title: "ElectronJS",
      },
      { icon: <FaNodeJs className="size-3" />, title: "NodeJs" },
      { icon: <DiSqllite className="size-3" />, title: "SQLite" },
      { icon: <RiTailwindCssFill className="size-3" />, title: "Tailwindcss" },
    ],
    hosting: "Not-hosted for now.",
    sourceCode: "https://github.com/aliaitrhou/note_book",
  },
  {
    slug: "exami",
    name: "Exami",
    year: "2025",
    platform: "Web",
    tools: [
      { icon: <RiJavascriptFill className="size-4" />, title: "Javascript" },
      { icon: <RiTailwindCssFill className="size-3" />, title: "Tailwindcss" },
      {
        icon: <SiExpress className="size-4 border border-black rounded-md" />,
        title: "ExpressJS",
      },
      { icon: <BiLogoPostgresql className="size-4" />, title: "Postgresql" },
      { icon: <FaKey className="size-3" />, title: "JWT" },
    ],
    hosting: "Not Deployed.",
    sourceCode: "https://github.com/aliaitrhou/exami",
  },
  {
    slug: "steadfast",
    name: "SteadFast Haven",
    year: "2025",
    platform: "Web Application",
    tools: [
      { icon: <RiJavascriptFill className="size-4" />, title: "JavaScript" },
      { icon: <RiTailwindCssFill className="size-3" />, title: "Tailwind CSS" },
      {
        icon: <SiExpress className="size-4 border border-black rounded-md" />,
        title: "ExpressJS",
      },
      { icon: <BiLogoPostgresql className="size-4" />, title: "PostgreSQL" },
      { icon: <FaKey className="size-3" />, title: "JWT" },
    ],
    hosting: "Deployed as the organization's official website.",
    website: "https://steadfasthaven.org",
    sourceCode: undefined,
  },
  {
    slug: "sketchybar",
    name: "SketchyBar",
    year: "2025",
    platform: "macOS",
    tools: [
      { icon: <PiTerminalWindowFill className="size-4" />, title: "Bash" },
      { icon: <RiTerminalBoxFill className="size-4" />, title: "SketchyBar" },
      { icon: <SiHomebrew className="size-4" />, title: "Homebrew" },
    ],
    hosting: "Personal macOS desktop configuration.",
    sourceCode: "https://github.com/aliaitrhou/sketchybar",
  },
];

export const getProjectBySlug = (slug: string) =>
  projectsData.find((p) => p.slug === slug);
