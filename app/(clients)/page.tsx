"use client";

import HeroSection from "@/components/sections/HeroSection";
import WhyUs from "@/components/sections/WhyUs";
import LeadProducts from "@/components/sections/LeadProducts";
import Steps from "@/components/sections/Steps";
import Guidance from "@/components/sections/Guidance";
import SliderProducts from "@/components/sections/SliderProducts";
import Reviews from "@/components/sections/Reviews";
import Faqs from "@/components/sections/Faqs";


const Homepage = () => {
  
  return (
    <>
      {/* {HERO SECTIONS} */}
      <HeroSection />

      {/* {About Us} */}
      <WhyUs />

      {/* {Products} */}
      <LeadProducts />
      <SliderProducts />

      {/* {Steps} */}
      <Steps />

      {/* {Guidance} */}

      <Guidance />

      {/* {Reviews} */}

      <Reviews />

      {/* {Q&A} */}

      <Faqs />

      {/* {Footer} */}

      <footer className="bg-[#21251A] max-w-7xl mx-auto w-full h-100 rounded-t-[50px]">
        
      </footer>
    </>
  );
};

export default Homepage;
