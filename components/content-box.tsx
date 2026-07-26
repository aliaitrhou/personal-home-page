import React from "react";
import { crimson } from "@/app/fonts";

interface Props {
  title: string;
  children: React.ReactNode;
  styles?: string;
  icon?: React.ReactNode;
}
const ContentBox: React.FC<Props> = ({
  title,
  children,
  styles = "",
  icon,
}) => {
  return (
    <div className="">
      <h2
        className={`flex items-center gap-2 leading-4 text-sm sm:text-lg font-bold text-black dark:text-white w-fit ${crimson.className} mb-2`}
      >
        {icon}
        <span>{title}</span>
      </h2>
      <div className={styles}>{children}</div>
    </div>
  );
};

export default ContentBox;
