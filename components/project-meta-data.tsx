"use client";

import { lexend } from "@/app/fonts";
import Link from "next/link";
import React from "react";

interface ToolBoxProps {
  icon?: React.ReactNode;
  title?: string;
  isLast?: boolean;
}

export const ToolBox: React.FC<ToolBoxProps> = ({
  icon,
  title,
  isLast = false,
}) => {
  return (
    <div
      className={`w-fit ${lexend.className} text-xs font-light flex items-center gap-1 pl-1`}
    >
      {icon}
      {title}
      {!isLast ? "," : "."}
    </div>
  );
};

interface ProjectMetaDataProps {
  title: string;
  children: React.ReactNode;
}

const ProjectMetaData: React.FC<ProjectMetaDataProps> = ({
  title,
  children,
}) => {
  return (
    <div className={`text-sm flex flex-row items-center gap-2 mb-1`}>
      <div
        className={`inline whitespace-nowrap break-keep text-neutral-800 dark:text-white bg-neutral-800/10 dark:bg-white/10 w-fit px-2 rounded-sm ${lexend.className} font-thin`}
      >
        <span>{title}</span>
      </div>
      <div className={`inline text-sm font-thin `}>{children}</div>
    </div>
  );
};

export default ProjectMetaData;
