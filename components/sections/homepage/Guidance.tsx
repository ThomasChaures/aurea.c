import React from "react";
import SectionHelper from "../../ui/SectionHelper";
import HeaderSections from "../../ui/HeaderSections";
import Image from "next/image";
import Button from "../../ui/Button";
import CtaButton from "../../ui/CtaButton";
import { ChevronRight } from "lucide-react";

const Guidance = () => {
  const benefits = [
    {
      id: 1,
      title: "Improved appetite control",
      category: "Weight loss",
      image: "benefit-1.png",
    },
    {
      id: 2,
      title: "Reduced shedding and healthier follicles",
      category: "Hair Care",
      image: "benefit-2.png",
    },
    {
      id: 3,
      title: "Clearer skin and stronger barrier function",
      category: "Skin Care",
      image: "benefit-3.png",
    },
    {
      id: 4,
      title: "More stable mood and better daily energy",
      category: "Hormone",
      image: "benefit-4.png",
    },
    {
      id: 5,
      title: "Better sleep, recovery, and stress resilience",
      category: "Wellness",
      image: "benefit-5.png",
    },
  ];
  return (
    <SectionHelper className="my-0! bg-[#21251A] text-center  max-w-full!">
      <div className="max-w-7xl pb-10 w-full relative mx-auto">
        <HeaderSections
          className="text-white pt-15"
          title="Your guide to health and wellness starts here."
          text="Our treatments support metabolic health, weight management, and overall wellness through clinician-designed formulas targeting appetite, hormones, skin, and more."
        />

        <div>
          <ul
            className="
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    md:grid-cols-2 
    lg:grid-cols-3 
    xl:grid-cols-5 
    gap-6
    place-items-center
    text-white
  "
          >
            {benefits &&
              benefits.map((b) => (
                <li
                  key={b.id}
                  className="
            rounded-3xl
            bg-white/15
            w-full 
            max-w-[250px]
            h-[330px]
            border border-[#FFFFFF1F]
            shadow-xl shadow-black/30 
            backdrop-blur-[48px] 
            overflow-hidden 
            flex flex-col
           
          "
                >
                  {/* Imagen */}
                  <div className="relative w-full h-[170px]">
                    <Image
                      fill
                      src={`/images/${b.image}`}
                      alt={b.title}
                      className="object-cover"
                      sizes="250px"
                      priority
                    />
                  </div>

                  {/* Contenido */}
                  <div className="p-3 flex flex-col h-[50%] justify-between">
                    <p className="text-base text-left leading-snug text-white">
                      {b.title}
                    </p>

                    <Button className="flex items-center justify-between w-full">
                      <span>{b.category}</span>
                      <ChevronRight color="white" />
                    </Button>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        <div className="mt-10">
          <CtaButton route={"/"} name="See if you're eligiable" />
        </div>
        <div className="w-[600px] h-[600px] rounded-full blur-[400px] left-1/2 transform -translate-x-1/2 top-0 absolute bg-white/80"></div>
      </div>
    </SectionHelper>
  );
};

export default Guidance;
