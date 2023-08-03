"use client"
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
import { useEffect, useState } from "react";
import Loading from "@/components/loading/Loading";
const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(counter, 1000)
  }, []);

  const counter=()=>{
    setLoading((data)=>!data)
  }

  return (
    <div className="bg-[#1d1d1d] md:px-16 px-4">
      {loading && <Loading></Loading>}
      {!loading && (
        <div className="overflow-x-hidden	">
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
      )}
    </div>
  );
};

export default Page;
