import Image from "next/image";
import CtaButton from "../../ui/CtaButton";
import SectionHelper from "../../ui/SectionHelper";
import { ChevronUp } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <SectionHelper
        className='bg-[url("/images/Hero.png")] bg-position-[center_top]
  h-[616px] flex-col flex items-center justify-center bg-no-repeat'
      >
        <div className="w-160 h-160 rounded-full max-md:w-[250px] max-md:h-[250px]
 blur-[250px] left-1/2 transform -translate-x-1/2 -top-50 absolute bg-radial from-white via-white/30 to-transparent"></div>

        <header className="w-full flex absolute top-10 max-w-[1192px] mx-auto px-10 items-center justify-between">
          <div className="bg-background px-5 py-2 rounded-full shadow-lg">
            <p className="font-mono font-bold text-2xl  ">Aurea.C</p>
          </div>
          <CtaButton route={"/"} name="See if you're eligiable" />
        </header>

        <h1 className="text-4xl md:text-6xl text-center font-mono font-bold text-white">
          {`{Weightloss, skincare...}`}
        </h1>
        <h2 className="mt-4 text-4xl md:text-6xl text-center text-[#A6A7A3] font-mono font-bold">
          Designed Around Your Body.
        </h2>

        <ul className="mt-8 flex items-center gap-6 text-sm font-sans font-light text-white opacity-90">
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

        <nav className="bg-black/38 backdrop-blur-xl py-4.5 px-2 rounded-full border-2 border-white/20 absolute -bottom-4.5 shadow-lg left-1/2 transform -translate-x-1/2">
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
