"use client";

import HeroSection from "@/components/sections/homepage/HeroSection";
import WhyUs from "@/components/sections/homepage/WhyUs";
import LeadProducts from "@/components/sections/homepage/LeadProducts";
import Steps from "@/components/sections/homepage/Steps";
import Guidance from "@/components/sections/homepage/Guidance";
import SliderProducts from "@/components/sections/homepage/SliderProducts";
import Reviews from "@/components/sections/homepage/Reviews";
import Faqs from "@/components/sections/homepage/Faqs";


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

    </>
  );
};

export default Homepage;
