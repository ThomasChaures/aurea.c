import React from "react";

const Pill = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className={`${className} rounded-full inline-block text-xl  border border-foreground/20 px-5 py-2`}>
      {children}
    </span>
  );
};

export default Pill;
