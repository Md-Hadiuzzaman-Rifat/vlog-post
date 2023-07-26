import React from "react";
import TextBtn from "../textBtn/TextBtn";
import Image from "next/image";
import FeatureBox from "../featureBox/FeatureBox";
import ServiceContent from "../ServiceContent/ServiceContent";
import TextWithImage from "../TextWithImage/TextWithImage";

const details = [
  {
    id: 1,
    img: "/0.png",
    title: "Brand Strategy & Art Direction",
  },
];

const Services = () => {
  return (
    <div className="text-white my-52 flex flex-col lg:flex-row gap-8">
      <TextWithImage></TextWithImage>
      <div className="flex flex-col">
        <TextBtn>SERVICES</TextBtn>
        <p className="mb-16 mt-8 w-[60%]">
          We help you to go online and increase your conversion rate Better
          design for your digital products.
        </p>
        <div className="ml-16">
          <ServiceContent></ServiceContent>
        </div>
      </div>
    </div>
  );
};

export default Services;
