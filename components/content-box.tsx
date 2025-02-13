import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const ContentBox: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <h2 className="uppercase  text-base/4 sm:text-base/5 font-bold mb-4 text-black dark:text-white w-fit border-b-2 rounded-b-sm border-orange-500 dark:border-NeonLime-500">
        {title}
      </h2>
      <div className="px-2 sm:px-4">{children}</div>
    </div>
  );
};

export default ContentBox;
