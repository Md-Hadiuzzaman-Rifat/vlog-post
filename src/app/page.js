"use client";
import Accordion from "@/components/accordion/Accordion";
import Approach from "@/components/approach/Approach";
import Banner from "@/components/banner/Banner";
import Features from "@/components/features/Features";
import Mail from "@/components/mail/Mail";
import Portfolio from "@/components/portfolio/Portfolio";
import Pricing from "@/components/pricing/Pricing";
import Services from "@/components/services/Services";
import React from "react";
import OurBlog from "@/components/OurBlog/OurBlog";
import Address from "@/components/address/Address";

const page = () => {
  return (
    <div className="bg-[#1d1d1d] md:px-16 px-4">
      <Banner></Banner>
      <Features></Features>
      <Accordion></Accordion>
      <Portfolio></Portfolio>
      <Pricing></Pricing>
      <Services></Services>
      <Approach></Approach>
      <Mail></Mail>
      <OurBlog></OurBlog>
      <Address></Address>
    </div>
  );
};

export default page;
