import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

interface ToolBoxProps {
  color: string;
  children: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
}

export const ToolBox: React.FC<ToolBoxProps> = ({
  color,
  children,
  href = "#",
  // TODO: add default Icon.
  icon,
}) => {
  const theme = `text-${color}-500 hover:text-${color}-600 hover:dark:text-${color}-400`;

  return (
    <Link
      href={href}
      target="_blank"
      className={`${theme} w-fit rounded-full text-xs font-Sora flex items-center gap-1`}
    >
      <>{icon}</>
      {children}
    </Link>
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
