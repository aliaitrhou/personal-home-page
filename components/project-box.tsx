import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ToolBox } from "./project-meta-data";
import { FaGithub } from "react-icons/fa";
import { lexend, saira } from "@/app/fonts";

interface Props {
  children: React.ReactNode;
  href: string;
  thumnail: StaticImageData;
  projectName: string;
  date: string;
}

const ProjectBox: React.FC<Props> = ({
  children,
  href,
  thumnail,
  projectName,
  date,
}) => {
  return (
    <div className="group w-full h-full mx-auto rounded-xs  transition-all duration-300 overflow-hidden flex flex-col">
      <Link
        href={href}
        className="
            border border-neutral-100 dark:border-neutral-600 
    group-hover:border-orange-600/40
    dark:group-hover:border-NeonLime-600/40
    transition-border
    duration-700
          ease-in-out
          overflow-hidden
      "
      >
        <Image
          className={`object-fill w-full aspect-[14/8]

    group-hover:scale-[1.02]
    transition-all
    duration-700
          ease-in-out
            `}
          src={thumnail}
          alt={projectName}
        />
      </Link>

      <div className="pt-2 space-y-1 py-3 flex flex-col flex-1">
        <div
          className={`flex items-start justify-between gap-2 font-bold  ${lexend.className}`}
        >
          <h3
            className={`text-sm text-transparent bg-clip-text bg-gradient-to-r dark:from-NeonLime-600 dark:to-emerald-200 from-red-500 via-red-400 to-orange-400`}
          >
            {projectName}
          </h3>
          <span className="shrink-0 px-2 py-0.5 text-[14px] font-medium dark:text-zinc-100 text-zinc-600 rounded-md">
            {date}
          </span>
        </div>

        <p
          className={`text-sm font-thin leading-relaxed text-neutral-600 dark:text-neutral-200 flex-1 ${saira.className} pb-2`}
        >
          {children}
        </p>

        <Link
          href={`https://github.com/aliaitrhou/${projectName}`}
          className={`w-fit ${lexend.className} text-xs font-light flex items-center gap-1 pl-1`}
        >
          <FaGithub className="size-4" />
          Source code
        </Link>
      </div>
    </div>
  );
};

export default ProjectBox;
