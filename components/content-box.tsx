import React from "react";

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
      <h2 className="uppercase leading-4 text-xs xs:text-sm sm:text-md font-bold mb-4 text-black dark:text-white w-fit border-b-[2.5px] rounded-b-sm border-orange-500 dark:border-NeonLime-500">
        {title}
      </h2>
      <div className={styles}>{children}</div>
    </div>
  );
};

export default ContentBox;
