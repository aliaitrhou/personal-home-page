"use client";

import { lexend } from "@/app/fonts";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

interface ToolBoxProps {
  color: string;
  children?: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
  title?: string;
  isLast?: boolean;
}

export const ToolBox: React.FC<ToolBoxProps> = ({
  color,
  href = "#",
  icon,
  title,
  isLast = false,
}) => {
  const theme = `text-${color}-500 hover:text-${color}-600 hover:dark:text-${color}-400  bg-white dark:bg-gray-200/15 border border-amber-200 dark:border-zinc-600 text-xs`;

  return (
    <div className="relative inline-block self-start">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-fit rounded-md ${lexend.className} text-[9px] font-light flex items-center gap-1 transition-colors duration-200 px-2 py-0.2 rounded-lg  ${isLast ? "text-white dark:text-black dark:bg-white bg-black/70 py-0.5" : theme}`}
      >
        {icon}
        {title}
      </a>
    </div>
  );
};

interface ProjectMetaDataProps {
  title: string;
  children: React.ReactNode;
  styles?: string;
}

const ProjectMetaData: React.FC<ProjectMetaDataProps> = ({
  title,
  children,
  styles,
}) => {
  return (
    <div
      className={`text-sm font-Sora mb-2 ${styles ? "flex flex-row items-start gap-2" : "space-x-2"}`}
    >
      <div className="inline whitespace-nowrap break-keep text-blue-400 bg-blue-400/40 dark:text-white dark:bg-white/20 w-fit px-2 rounded-sm">
        <span>{title}</span>
      </div>
      <IoIosArrowRoundForward className="inline size-4 md:size-5 text-blue-400 dark:text-white" />
      <p className={`inline font-light mt-2 ${styles}`}>{children}</p>
    </div>
  );
};

export default ProjectMetaData;
