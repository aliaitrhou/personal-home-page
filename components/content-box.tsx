import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const ContentBox: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="sm:px-4 md:px-6 my-2 sm:my-4 ">
      <h2 className="pb-2 text-sm sm:text-md md:text-lg font-bold underline underline-offset-[4px] decoration-blue-600/45 dark:decoration-teal-400/45 decoration-2 decoration-wavy mb-2 sm:mb-4">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
};

export default ContentBox;
