"use client";

import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import WhyUs from "@/components/sections/WhyUs";
import LeadProducts from "@/components/sections/LeadProducts";
import Steps from "@/components/sections/Steps";
import SliderProducts from "@/components/sections/SliderProducts";
import SectionHelper from "@/components/ui/SectionHelper";
import HeaderSections from "@/components/ui/HeaderSections";
import Card from "@/components/ui/Card";
import StackedCards from "@/components/organism/StackerdCard";

import Button from "@/components/ui/Button";
import { useState } from "react";
import { CircleCheck, Section } from "lucide-react";
import Pill from "@/components/ui/Pill";
import InnerBar from "@/components/ui/InnerBar";

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
      <SectionHelper></SectionHelper>
      {/* {Reviews} */}

      {/* {Q&A} */}

      {/* {Footer} */}
    </>
  );
};

export default Homepage;
