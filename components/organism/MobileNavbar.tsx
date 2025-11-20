"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronUp } from "lucide-react";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="bg-white/10 z-42 backdrop-blur-2xl lg:hidden p-3 rounded-xl"
      >
        {open ? <X color="white" /> : <Menu color="white" />}
      </div>

      <nav
        className={`bg-black/38 absolute h-90 z-40 transition-all lg:hidden
        rounded-b-3xl backdrop-blur-xl py-4.5 px-2 w-full border-2 border-white/20
        shadow-lg left-1/2 transform -translate-x-1/2
        ${open ? "-top-10" : "-top-100"}
      `}
      >
        <ul className="flex flex-col mt-30 items-center gap-x-8 text-white text-sm font-light">
          <li className="py-4 px-4 border-b w-full"><Link href="/">Home</Link></li>
          <li className="py-4 px-4 border-b w-full"><Link href="/">About Us</Link></li>
          <li className="py-4 px-4 border-b w-full flex items-center gap-1">
            <Link href="/">Products</Link><ChevronUp size={18} />
          </li>
          <li className="py-4 px-4 w-full"><Link href="/">Contact Us</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavbar;
