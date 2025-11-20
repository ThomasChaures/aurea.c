"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import HeaderSections from "@/components/ui/HeaderSections";
import SectionHelper from "@/components/ui/SectionHelper";
import Card from "@/components/ui/Card";

gsap.registerPlugin(ScrollTrigger);

const Steps = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    const totalOffset = cards.scrollHeight - 260;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top+=200 center", 
        end: "bottom+=200 center",
        scrub: true,
        markers: false,
      },
    });

    tl.to(cards, {
      y: -totalOffset,
      ease: "none"
    });

    return () => tl.scrollTrigger?.kill();
  }, []);


    const steps = [
    { id: 1, title: "Complete your medical history",
      description: "Tell us about your background so our team can evaluate your case." },
    { id: 2, title: "Schedule a video visit",
      description: "Meet with a licensed medical professional, fully online on your schedule." },
    { id: 3, title: "Receive your personalized treatment",
      description: "Get your medication delivered to your home and start your program." },
  ];

  return (
    <SectionHelper
      ref={sectionRef}
      id="stepsSection"
      className="pb-0! mb-0! max-md:mb-20! relative min-h-[600px] px-0 overflow-hidden max-w-[1300px] mx-auto"
    >
      <HeaderSections
        title="Feeling better has never been this easy."
        text="Our care uses GLP-1 to support metabolic health and sustainable weight management through clinician-designed formulas targeting appetite, metabolism, and glucose control."
      />

      <div className="absolute -bottom-44 left-1/2 -translate-x-1/2 w-full max-w-[1300px] flex justify-between pointer-events-none">
        <div className="relative max-lg:hidden h-[600px] w-[400px]">
          <Image src="/images/c-2.png" fill alt="Product image" className="object-contain" />
        </div>
        <div className="relative max-lg:hidden h-[600px] w-[380px] translate-y-10">
          <Image src="/images/c-1.png" fill alt="Product image" className="object-contain" />
        </div>
      </div>

      <div className="relative max-w-[550px] mx-auto h-[300px] overflow-hidden mt-8">
        <div className="absolute bg-linear-to-t w-full top-0 left-0 h-16 z-10 from-transparent to-background" />

        <div ref={cardsRef} className="flex flex-col items-center gap-y-5 w-full z-0">
          {steps.map((s) => (
            <Card key={s.id}
              className={`border-0 shadow-lg p-5! ${s.id === 2 ? "" : "bg-[#D4B66E]! text-white!"}`}
            >
              <p className={`${s.id === 2 ? "text-gray-500" : "text-white"}`}>
                Step -{s.id}
              </p>
              <h3 className={`text-lg font-semibold 
                ${s.id === 2 ? "text-[#4d633a]" : "text-white"} mb-1`}>
                {s.title}
              </h3>
              <p className={`${s.id === 2 ? "text-gray-600" : "text-white"}`}>
                {s.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="absolute bg-linear-to-b w-full bottom-0 left-0 h-20 z-10 from-35% from-transparent to-background" />
      </div>
    </SectionHelper>
  );
};

export default Steps;
