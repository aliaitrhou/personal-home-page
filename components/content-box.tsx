import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const ContentBox: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <h2 className="pb-2 font-bold underline underline-offset-4 decoration-gray-500 decoration-4">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
};

export default ContentBox;
