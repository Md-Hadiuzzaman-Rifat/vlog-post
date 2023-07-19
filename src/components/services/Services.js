import React from "react";
import TextBtn from "../textBtn/TextBtn";

const Services = () => {
  return (
    <div className="text-white">
      <TextBtn>SERVICES</TextBtn>
      <p className="mb-16 mt-8">
        We help you to go online and increase your conversion rate Better design
        for your digital products.
      </p>
      <div>
        <div className="flex items-center mt-8">
          <p className="text-xl font-bold mr-8">01</p> <span className="custom-h1">UI/UX Design</span>
        </div>
        <div className="flex items-center mt-8">
          <p className="text-xl font-bold mr-8">02</p> <span className="custom-h1">Branding</span>
        </div>
        <div className="flex items-center mt-8">
          <p className="text-xl font-bold mr-8">03</p> <span className="custom-h1">Development</span>
        </div>
        <div className="flex items-center mt-8">
          <p className="text-xl font-bold mr-8">04</p> <span className="custom-h1">Marketing</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
