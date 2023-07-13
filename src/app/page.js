"use client";
import Accordion from "@/components/accordion/Accordion";
import Approach from "@/components/approach/Approach";
import Banner from "@/components/banner/Banner";
import Features from "@/components/features/Features";
import Portfolio from "@/components/portfolio/Portfolio";
import Pricing from "@/components/pricing/Pricing";
import Services from "@/components/services/Services";
import React from "react";


const page = () => {
  return (
    <div className="bg-[#1d1d1d] px-16">
      <Banner></Banner>
      <Features></Features>
      <Accordion></Accordion>
      <Portfolio></Portfolio>
      <Pricing></Pricing>
      <Services></Services>
      <Approach></Approach>
    </div>
  );
};

export default page;
