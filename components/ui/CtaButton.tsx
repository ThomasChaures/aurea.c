import Link from "next/link";
import React from "react";

const CtaButton = ({ name, route }: { name: string; route: string }) => {
  return (
    <Link
      href={route}
      className="
    relative inline-flex items-center justify-center
    w-[219px] h-12
    px-6 py-3
    text-base  shadow-lg text-white
    bg-black/30
    rounded-[45px]
    button"
    >
      <span className="relative z-10">{name}</span>
    </Link>
  );
};

export default CtaButton;
