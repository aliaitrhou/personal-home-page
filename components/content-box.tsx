import React from "react";
import { FaLeaf } from "react-icons/fa";
import { GiChestnutLeaf, GiFallingLeaf, GiOakLeaf } from "react-icons/gi";
import { IoLeafSharp } from "react-icons/io5";
import { TiLeaf } from "react-icons/ti";

interface Props {
  title: string;
  children: React.ReactNode;
  styles?: string;
}

const ContentBox: React.FC<Props> = ({
  title,
  children,
  styles = "px-2 sm:px-4",
}) => {
  return (
    <div>
      <h2 className="uppercase leading-4 text-xs xs:text-sm sm:text-md font-bold mb-4 text-black dark:text-white w-fit border-b-[2.4px] rounded-b-sm border-orange-500 dark:border-NeonLime-500">
        <FaLeaf className="inline text-orange-500 dark:text-NeonLime-500 -rotate-[50deg] mr-1" />
        <span>{title}</span>
      </h2>
      <div className={styles}>{children}</div>
    </div>
  );
};
// <TiLeaf className="inline size-4" />

export default ContentBox;
