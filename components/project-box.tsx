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
  techStack: React.ReactNode;
}

const ProjectBox: React.FC<Props> = ({
  children,
  href,
  thumnail,
  projectName,
  date,
  techStack,
}) => {
  return (
    <div className="group w-full h-full mx-auto rounded-lg border border-neutral-200 bg-white dark:bg-neutral-700/60 dark:border-zinc-600/60  transition-all duration-300 overflow-hidden flex flex-col">
      <Link href={href}>
        <Image
          className={`object-fill w-full aspect-[14/8] rounded-t-lg group-hover:scale-[1.03] transition-all duration-400 ease-in-out`}
          src={thumnail}
          alt={projectName}
        />
      </Link>

      <div className="pt-2 space-y-3 p-3 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className={`text-sm text-transparent bg-clip-text bg-gradient-to-r dark:from-NeonLime-600 dark:to-emerald-200 from-red-500 via-red-400 to-orange-400 ${lexend.className}`}>
            {projectName}
          </h3>
          <span className="shrink-0 px-2 py-0.5 text-[14px] font-medium dark:text-zinc-100 text-zinc-600 rounded-md font-mplus">
            {date}
          </span>
        </div>

        <p className={`text-sm leading-relaxed text-zinc-600 dark:text-zinc-400/80 flex-1 ${saira.className}`}>
          {children}
        </p>

        <div className="flex flex-col items-center justify-between gap-4">
          <div className="flex-1">{techStack}</div>
          <ToolBox
            color="white"
            icon={<FaGithub className="size-4" />}
            isLast={true}
            href={`https://github.com/aliaitrhou/${projectName}`}
            title="Source code"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
