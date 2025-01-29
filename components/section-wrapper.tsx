import React from "react";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="p-2  sm:px-6 sm:py-4 md:px-8 md:py-6 ">
      {children}
    </section>
  );
};

export default SectionWrapper;
