import React from "react";

interface Props {
  timeRange: string;
  children: React.ReactNode;
}

const TimeLine: React.FC<Props> = ({ timeRange, children }) => {
  return (
    <div
      className="py-2"
      style={{
        paddingLeft: "4.7em",
        textIndent: "-4.7em",
      }}
    >
      <span
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
