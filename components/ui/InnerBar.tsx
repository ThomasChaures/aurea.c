import React from "react";

const InnerBar = ({
  inner,
  children,
  className,
  className2,
}: {
  inner?: boolean;
  children: React.ReactNode;
  className?: string;
  className2?: string;
}) => {
  return (
    <div
      className={`
    relative
    ${className}
  
    rounded-[36px]
    bg-black/20
    border border-white/20
    backdrop-blur-xl
    overflow-hidden
  `}
    >
      <div
        className={`
      relative
      w-full h-full
      flex items-center
       gap-6
      overflow-hidden
      inner-shadow
      ${className2}
      ${
        inner
          ? `before:content-[''] px-6
      before:absolute before:-left-4 before:top-0
      before:h-full before:w-12
      before:bg-[radial-gradient(circle_at_left,rgba(0,0,0,0.9),black)]
      before:blur-[10px]

      after:content-['']
      after:absolute after:-right-4 after:top-0
      after:h-full after:w-12
      after:bg-[radial-gradient(circle_at_right,rgba(0,0,0,0.9),black)]
      after:blur-[10px]`
          : ``
      }
    `}
      >
        {children}
      </div>
    </div>
  );
};

export default InnerBar;
