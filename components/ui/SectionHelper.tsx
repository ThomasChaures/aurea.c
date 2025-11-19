import React from "react";

const SectionHelper = ({ className, children }: { className?: string, children: React.ReactNode}) => {
  return (
    <section className={`${className}  max-w-7xl w-full mb-20 relative mx-auto max-lg:px-10 px-20`}>{children}</section>
  );
};

export default SectionHelper;
