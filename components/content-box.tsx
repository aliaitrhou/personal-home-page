import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const ContentBox: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="sm:px-4 md:px-6 my-2 sm:my-4 ">
      <h2 className="px-1 text-base/4 sm:text-base/5 md:text-base/6 font-bold mb-2 sm:mb-4 bg-orange-300 text-orange-500  border-b-orange-500 dark:bg-NeonLime-300/60 dark:text-NeonLime-500 rounded-sm w-fit">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
};

export default ContentBox;
