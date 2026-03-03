import React from "react";
import {lexend} from '@/app/fonts'

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
    <div className="px-2 sm:px-8 md:px-10">
      <h2 className={`flex items-center gap-2 uppercase leading-4 text-xs xs:text-sm sm:text-md font-bold text-black dark:text-white w-fit ${lexend.className} mb-4`}>
        {icon}
        <span>{title}</span>
      </h2>
      <div className={styles}>{children}</div>
    </div>
  );
};

export default ContentBox;
