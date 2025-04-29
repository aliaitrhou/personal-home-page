import React from "react";
import { GiBroadheadArrow } from "react-icons/gi";

interface Props {
  title: string;
  children: React.ReactNode;
}

const ProjectMetaData: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="space-x-2 text-sm font-Sora mb-2">
      <div className="inline text-blue-400 bg-blue-400/40 dark:text-white dark:bg-white/20 w-fit px-2 rounded-sm">
        <span>{title}</span>
      </div>
      <GiBroadheadArrow className="inline mb-1 rotate-[315deg] text-blue-400 dark:text-white" />
      <p className="inline font-light">{children}</p>
    </div>
  );
};

export default ProjectMetaData;
