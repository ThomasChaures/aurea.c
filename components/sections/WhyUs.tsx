import Image from "next/image";
import SectionHelper from "../ui/SectionHelper";
import InnerBar from "../ui/InnerBar";

const WhyUs = () => {
  const items = [
    "Script verified",
    "100% online",
    "Confidential",
    "No video calls",
    "Online questionnaire",
    "50K+ patients",
    "Lowest cost",
    "LegitScript verified",
  ];
  return (
    <>
      {" "}
      <SectionHelper className="relative mt-80 mb-20 ">
        <h2 className="sr-only">Why us?</h2>
        <Image
          className="absolute -top-65 left-1/2 transform -translate-x-1/2"
          src={"/images/cosmetics.png"}
          width={900}
          height={0}
          alt="Cosmetics"
        />

        <div className="bg-[#21251A] mx-auto w-full items-center flex flex-col justify-between  h-[484px] p-10 rounded-[64px] shadow-[0px_-4px_10.2px_0px_#00000040] gap-y-0 relative overflow-hidden z-10">
           <InnerBar inner className="w-[1032px]   h-[52px]">
            <div className="animate-marquee whitespace-nowrap font-sans font-light opacity-85 inline-block">
                {/* Items originales */}
                {items.map((item, i) => (
                  <span key={i} className="mx-8 text-white">
                    {item}
                  </span>
                ))}

                {/* Clonados para animación infinita */}
                {items.map((item, i) => (
                  <span key={`clone-${i}`} className="mx-8 text-white">
                    {item}
                  </span>
                ))}
            </div>
           </InnerBar>

          <p className="font-sans text-[25px] font-light leading-9  text-white text-center">
            “Aurea.Cure gave me clarity I never found in clinics, supplements,
            or wellness apps. If you're tired of generic advice and want real
            answers about your body, this is where it starts.”
          </p>
          <div>
            <ul className="flex items-center justify-center  text-white  gap-x-6">
              <li className="rounded-3xl p-6 bg-white/15 border border-[#FFFFFF1F] shadow-xl shadow-black/30 backdrop-blur-[48px]">
                <span className="font-light text-xl">87%</span>
                <p className="opacity-50 mt-3">of members report</p>
                <p>steadier appetite control</p>
              </li>
              <li className="rounded-3xl  bg-white/15 p-6 border border-[#FFFFFF1F] shadow-xl shadow-black/30 backdrop-blur-[48px]">
                <span className="font-light text-xl">71%</span>
                <p className="opacity-50 mt-3">of members achieve</p>
                <p>clinically meaningful weight loss</p>
              </li>
              <li className="rounded-3xl  bg-white/15 p-6 border border-[#FFFFFF1F] shadow-xl shadow-black/30 backdrop-blur-[48px]">
                <span className="font-light text-xl">67%</span>
                <p className="opacity-50 mt-3">of members feel</p>
                <p>improved daily energy</p>
              </li>
            </ul>
          </div>
          <div className="w-[400px] h-[400px] rounded-full blur-[270px] left-1/2 transform -translate-x-1/2 top-30 absolute bg-white/70"></div>
        </div>
      </SectionHelper>
    </>
  );
};

export default WhyUs;
