import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { FaSquareGithub } from "react-icons/fa6";
import { ToolBox } from "./project-meta-data";
import { FaGithub } from "react-icons/fa";

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
    <div className="group w-full mx-auto rounded-xl bg-amber-100/70 dark:bg-zinc-700/30 border border-amber-300/30 dark:border-zinc-600/15 dark:hover:border-zinc-700 hover:border-amber-300 transition-all duration-300 p-3">
      <Link href={href}>
        <Image
          className={`object-fill w-full aspect-[14/8] rounded-lg border border-neutral-500 dark:border-neutral-700`}
          src={thumnail}
          alt={projectName}
        />
      </Link>

      <div className="pt-2 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm text-transparent bg-clip-text bg-gradient-to-r dark:from-NeonLime-600 dark:to-emerald-200 from-red-500 via-red-400 to-orange-400">
            {projectName}
          </h3>
          <span className="shrink-0 px-2 py-0.5 text-xs font-medium text-white dark:text-zinc-400 bg-zinc-800/80 rounded-md">
            {date}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {children}
        </p>

        <div className="flex items-center justify-between pt-2.5 border-t border-amber-300/50 dark:border-zinc-700/60">
          <div className="flex-1">{techStack}</div>
          <ToolBox
            color="white"
            icon={
              <FaGithub className="size-4 text-gray-800 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-400" />
            }
            href={`https://github.com/aliaitrhou/${projectName}`}
            title="Source code"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
