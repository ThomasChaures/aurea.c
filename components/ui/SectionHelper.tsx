import React from "react";

const SectionHelper = ({ className, children, aria }: {aria?: string, className?: string, children: React.ReactNode}) => {
  return (
    <section aria-labelledby={aria} className={`${className}  max-w-7xl w-full mb-20 relative mx-auto max-lg:px-10 max-md:p-5 px-20`}>{children}</section>
  );
};

export default SectionHelper;
