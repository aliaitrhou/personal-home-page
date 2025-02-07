import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const ContentBox: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="sm:px-4 md:px-6 my-2 sm:my-4">
      <h2 className="text-md sm:text-lg font-bold mb-4 text-black dark:text-white w-fit underline underline-offset-[6px] decoration-4 decoration-zinc-400 dark:decoration-zinc-500">
        {title}
      </h2>
      <div className="pl-4">{children}</div>
    </div>
  );
};

export default ContentBox;
