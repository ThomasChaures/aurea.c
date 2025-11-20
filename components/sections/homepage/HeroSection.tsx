import Image from "next/image";
import Link from "next/link";
import SectionHelper from "../../ui/SectionHelper";
import CtaButton from "../../ui/CtaButton";
import { ChevronUp } from "lucide-react";
import MobileNavbar from "@/components/organism/MobileNavbar";
const HeroSection = () => {
  return (
    <SectionHelper
      className='bg-[url("/images/Hero.png")] max-xl:rounded-b-4xl max-xl:bg-cover bg-position-[center_top]
      h-[616px] flex flex-col items-center justify-center bg-no-repeat'
    >
      <div
        className="w-160 h-160 rounded-full max-md:w-[280px] max-md:blur-[190px]
        blur-[250px] left-1/2 -translate-x-1/2 -top-50 absolute bg-radial
        from-white via-white/30 to-transparent"
      />

      {/* NAV */}
      <header className="w-full flex absolute z-50 top-10 px-10 max-md:p-5 justify-between max-w-[1192px] mx-auto">
        <div className="bg-background z-42 px-5 py-2 rounded-full shadow-lg">
          <p className="font-mono font-bold text-2xl">Aurea.C</p>
        </div>

        {/* CTA Desktop */}
        <div className="max-lg:hidden">
          <CtaButton route="/" name="See if you're eligiable" />
        </div>

        <MobileNavbar />
      </header>

      {/* CONTENT */}
      <h1 className="text-3xl md:text-6xl text-center font-mono font-bold text-white">
        {`{Weightloss, skincare...}`}
      </h1>

      <h2 className="mt-4 text-3xl md:text-6xl text-center text-[#A6A7A3] font-mono font-bold">
        Designed Around Your Body.
      </h2>

      <ul className="mt-8 flex items-center gap-6 text-sm text-white opacity-90 max-md:flex-col">
        <li className="flex gap-2 items-center">
          <Image width={23} height={23} src="/images/icons/users.svg" alt="" />{" "}
          150,000+ people supported
        </li>
        <li className="flex gap-2 items-center">
          <Image width={23} height={23} src="/images/icons/check.svg" alt="" />{" "}
          Trusted clinical care
        </li>
        <li className="flex gap-2 items-center">
          <Image width={23} height={23} src="/images/icons/usd.svg" alt="" />{" "}
          Clear, upfront pricing
        </li>
      </ul>

      
      <div className="md:hidden mt-5">
        <CtaButton route="/" name="See if you're eligiable" />
      </div>

      
      <nav className="bg-black/38 z-10 max-lg:hidden backdrop-blur-xl py-4.5 px-4.5 rounded-full border-2 border-white/20 absolute -bottom-4.5 shadow-lg left-1/2 transform -translate-x-1/2">
        <ul className="flex items-center gap-x-8 text-white text-sm">
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/'}>About Us</Link></li>
          <li >
            <Link className="flex items-center gap-x-1" href={'/'}>Products <ChevronUp size={18} /></Link>
          </li>
          <li><Link href={'/'}>Contact Us</Link></li>
        </ul>
      </nav>
    </SectionHelper>
  );
};

export default HeroSection;
