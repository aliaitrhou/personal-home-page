import React from "react";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <section className="p-2">{children}</section>;
};

export default SectionWrapper;
