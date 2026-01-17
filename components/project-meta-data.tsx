"use client";

import React, { useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

interface ToolBoxProps {
  color: string;
  children?: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
  title?: string;
}

export const ToolBox: React.FC<ToolBoxProps> = ({
  color,
  children,
  href = "#",
  icon,
  title,
}) => {
  const [isMouseOver, setIsMouseOver] = React.useState(false);

  const theme = `text-${color}-500 hover:text-${color}-600 hover:dark:text-${color}-400`;

  return (
    <div className="relative inline-block">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${theme} w-fit rounded-full text-xs font-sans flex items-center gap-1 transition-colors duration-200`}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        {icon}
        {children && children}
      </a>

      {title && isMouseOver && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 px-3 py-1.5 bg-neutral-900 dark:bg-neutral-700 text-white text-xs rounded-lg whitespace-nowrap pointer-events-none animate-fadeIn shadow-lg">
          {title}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px">
            <div className="border-4 border-transparent border-t-neutral-900 dark:border-t-neutral-700"></div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, 4px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
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
