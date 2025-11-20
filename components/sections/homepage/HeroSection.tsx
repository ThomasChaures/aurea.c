"use client";
import Image from "next/image";
import CtaButton from "../../ui/CtaButton";
import SectionHelper from "../../ui/SectionHelper";
import { ChevronUp } from "lucide-react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <SectionHelper
        className='bg-[url("/images/Hero.png")] max-xl:rounded-b-4xl max-xl:bg-cover bg-position-[center_top]
  h-[616px] flex-col flex items-center justify-center bg-no-repeat'
      >
        <div
          aria-hidden="true"
          className="w-160 h-160 rounded-full max-md:w-[280px]  max-md:blur-[190px]
 blur-[250px] left-1/2 transform -translate-x-1/2 -top-50 max-md:-top-20 absolute bg-radial from-white via-white/30 to-transparent"
        ></div>

        <header
          className={`w-full flex ${
            !open ? "absolute" : "fixed"
          } z-50 top-10 max-sm:top-5 max-w-[1192px] mx-auto px-10 max-md:p-5 items-center justify-between`}
        >
          <div className="bg-background z-42 px-5 py-2 rounded-full shadow-lg">
            <p className="font-mono font-bold text-2xl  ">Aurea.C</p>
          </div>
          <div className="max-lg:hidden">
            <CtaButton route={"/"} name="See if you're eligiable" />
          </div>
          <div
            onClick={() => setOpen((prev) => !prev)}
            className="bg-white/10  z-42 backdrop-blur-2xl lg:hidden p-3 rounded-xl"
          >
            {open ? <X color="white" /> : <Menu color="white" />}
          </div>

          <nav
            className={`bg-black/38 ${
              !open ? "-top-100 " : " -top-10"
            } absolute h-90 z-40 transition-all lg:hidden rounded-b-3xl backdrop-blur-xl py-4.5 px-2 w-full border-2 border-white/20  shadow-lg left-1/2 transform -translate-x-1/2`}
          >
            <ul className="flex flex-col mt-30 items-center gap-x-8 z-0 text-white justify-between text-sm font-light font-sans">
              <li className="py-4 px-4 border-b w-full ">Home</li>
              <li className="py-4 px-4 border-b w-full ">About Us</li>
              <li className="py-4 px-4 border-b w-full flex items-center gap-x-1">
                Products <ChevronUp size={18} color="white" />{" "}
              </li>
              <li className="py-4 px-4  w-full ">Contact Us</li>
            </ul>
          </nav>
        </header>

        <h1 className="text-3xl max-md:mt-10 md:text-6xl text-center max-lg:text-2xl font-mono font-bold text-white">
          {`{Weightloss, skincare...}`}
        </h1>
        <h2 className="mt-4 text-3xl max-lg:text-2xl  md:text-6xl text-center text-[#A6A7A3] font-mono font-bold">
          Designed Around Your Body.
        </h2>

        <ul className="mt-8 max-md:mb-7 max-md:flex-col flex items-center gap-6 text-sm font-sans font-light text-white opacity-90">
          <li className="flex items-center gap-2">
            <Image
              width={23}
              height={23}
              src={"/images/icons/users.svg"}
              alt="Users icon"
              loading="eager"
            />{" "}
            150,000+ people supported
          </li>

          <li className="flex items-center gap-2">
            <Image
              width={23}
              height={23}
              src={"/images/icons/check.svg"}
              alt="Check icon"
              loading="eager"
            />{" "}
            Trusted clinical care
          </li>

          <li className="flex items-center gap-2">
            <Image
              width={23}
              height={23}
              src={"/images/icons/usd.svg"}
              alt="Dollar icon"
              loading="eager"
            />{" "}
            Clear, upfront pricing
          </li>
        </ul>

        <div className="md:hidden">
          <CtaButton route={"/"} name="See if you're eligiable" />
        </div>

        <nav className="bg-black/38 max-lg:hidden backdrop-blur-xl py-4.5 px-2 rounded-full border-2 border-white/20 absolute -bottom-4.5 shadow-lg left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center gap-x-8 z-0 text-white justify-between text-sm font-light font-sans">
            <li className="pl-6">Home</li>
            <li>About Us</li>
            <li className="flex items-center gap-x-1">
              Products <ChevronUp size={18} color="white" />{" "}
            </li>
            <li className="pr-6">Contact Us</li>
          </ul>
        </nav>
      </SectionHelper>
    </>
  );
};

export default HeroSection;
