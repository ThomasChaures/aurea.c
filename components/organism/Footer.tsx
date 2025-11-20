import Link from "next/link";
import Image from "next/image";
import InputGlass from "@/components/ui/form/InputGlass";
import Button from "@/components/ui/Button";
const Footer = () => {
  const ul = ["Home", "About Us", "Review", "Contact Us"];
  const ul2 = [
    "Weight Loss",
    "Hair Growth",
    "Skin Care",
    "Wellness",
    "Men’s Health",
  ];
  const brand = ["ama.png", "legit.png", "hipa.png"];
  return (
    <footer className="bg-[#21251A] overflow-hidden relative max-w-7xl max-lg:p-8 p-10 pb-4 mx-auto w-full  rounded-t-[50px]">
      <div className="absolute inset-0  bg-size-[800px] max-lg:bg-size-[700px] block -bottom-50 max-lg:bg-bottom w-full bg-no-repeat bg-[url('/images/cosmetics.png')] bg-cover bg-bottom-right opacity-20"></div>
      {/* Header footer */}
      <div className="flex items-start max-md:flex-col max-md:gap-y-10 w-full border-b border-white/20 pb-10  justify-between">
        <div className="max-w-[670px] flex flex-col gap-y-7 items-start">
          <div className="bg-background inline-block px-5 py-2 rounded-full shadow-lg">
            <p className="font-mono font-bold text-2xl  ">Aurea.C</p>
          </div>

          <div className="text-xl inter font-light">
            <p className="text-white">Thank you for visiting Aurea.C.</p>
            <p className="text-white/60 max-lg:max-w-[500px] max-md:max-w-full">
              We’re here to make personalized care simple, supportive, and easy
              to access whenever you need it.
            </p>
          </div>

          <div className="max-w-[360px] max-md:max-w-full w-full relative">
            <InputGlass
              type="mail"
              className="py-5"
              placeholder="Enter your email"
            />
            <Button className="absolute right-2 text-sm top-1/2 transform -translate-y-1/2">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="flex items-start gap-x-10">
          <ul className="flex flex-col gap-y-6">
            {ul &&
              ul.map((l, index) => (
                <li key={index}>
                  <Link
                    className=" font-light  text-white hover:opacity-100 opacity-50"
                    href={""}
                  >
                    {l}
                  </Link>
                </li>
              ))}
          </ul>

          <ul className="flex flex-col gap-y-6">
            {ul2 &&
              ul2.map((l, index) => (
                <li key={index}>
                  <Link
                    className=" font-light  text-white hover:opacity-100 opacity-50"
                    href={""}
                  >
                    {l}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* content */}

      <div className="pt-10 min-h-80 flex flex-col  justify-between w-full">
        <div
          className="bg-white/10 border mt-5 max-md:max-w-full max-lg:mb-10 relative max-w-[380px] flex items-center justify-between py-4 w-full text-white placeholder:text-white/60
           px-5 text-sm font-light border-white/30
             backdrop-blur-2xl rounded-4xl"
        >
          {brand &&
            brand.map((b, index) => (
              <div key={index} className="relative    w-[91.33px] min-h-30">
                <div className="absolute inset-0 bg-[#21251A] mix-blend-overlay rounded-3xl -z-10" />
                <Image
                  src={`/images/brands/${b}`}
                  alt="Brand"
                  fill
                  className="object-contain  mix-blend-luminosity
          invert-[0.05] brightness-[1.3]"
                />
              </div>
            ))}
        </div>

        <div className=" bg-black/30 max-lg:flex-col max-lg:py-4 max-lg:rounded-3xl flex items-center max-lg:p-2   p-3 text-sm justify-between rounded-full  text-white/60 font-light w-full backdrop-blur-lg border-white/10 border ">
          <div className="w-full max-lg:text-center md:max-w-[300px]">
            <p>© 2025 Aureacure, All rights reserved</p>
          </div>

          <ul className="flex max-lg:flex-col w-full justify-end items-center max-lg:gap-x-3 max-xl:gap-x-4 gap-x-6">
            <li>
              <Link href={"/"}>Terms & conditions</Link>
            </li>
            <li>
              <Link href={"/"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"/"}>Medical Consent</Link>
            </li>
            <li>
              <Link href={"/"}>For California Residents</Link>
            </li>
            <li>
              <Link href={"/"}>Bill of Rights</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
