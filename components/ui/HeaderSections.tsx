import React from "react";

const HeaderSections = ({
  className,
  white,
  title,
  text,
}: {
  className?: string;
  white?: boolean;
  title: string;
  text: string;
}) => {
  return (
    <header className={`${className} text-center flex mb-20 flex-col gap-y-4 items-center justify-center`}>
      <h2 className="font-mono font-bold text-4xl">{title}</h2>
      <p className="font-light max-w-[800px]">{text}</p>
    </header>
  );
};

export default HeaderSections;
