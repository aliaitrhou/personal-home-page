import React from "react";

interface Props {
  timeRange: string;
  children: React.ReactNode;
}

const TimeLine: React.FC<Props> = ({ timeRange, children }) => {
  return (
    <div
      className="py-1 sm:py-0 text-[1rem] sm:text-md md:text-lg"
      style={{
        paddingLeft: "4.7em",
        textIndent: "-4.7em",
      }}
    >
      <span
        className="text-sm sm:text-md md:text-lg dark:text-zinc-400"
        style={{
          fontWeight: "bold",
          marginRight: "1em",
        }}
      >
        [ {timeRange} ]
      </span>
      {children}
    </div>
  );
};

export default TimeLine;
