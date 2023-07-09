"use client";
import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#1d1d1d] w-full px-12">

      <div className="banner_section  h-screen  flex content-between items-center">
        <div className="flex flex-col justify-center banner_section_left flex-1">
          <h1 className="text-6xl tracking-wider text-white font-semibold leading-[5rem]">
            Better design for your digital products.
          </h1>
          <p className="text-white font-thin my-4">
            We are a creative studio specializing in UI/UX design, development
            and strategy.
          </p>
          <Button>Explore More</Button>
        </div>
        <div className="banner_section_right flex-1 ">
          <Image
            className="w-[100%]"
            src="/header1.png"
            width={500}
            height={500}
            alt="Header Image"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default page;
