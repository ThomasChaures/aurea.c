import React, { forwardRef } from "react";

interface Props {
  id?: string;
  aria?: string;
  className?: string;
  children: React.ReactNode;
}

const SectionHelper = forwardRef<HTMLElement, Props>(
  ({ id, aria, className, children }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        aria-labelledby={aria}
        className={`${className} max-w-7xl w-full mb-20 relative mx-auto max-lg:px-10 max-md:p-5 px-20`}
      >
        {children}
      </section>
    );
  }
);

SectionHelper.displayName = "SectionHelper";

export default SectionHelper;
