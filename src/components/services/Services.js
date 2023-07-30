import React from "react";
import TextBtn from "../textBtn/TextBtn";
import Image from "next/image";
import FeatureBox from "../featureBox/FeatureBox";
import ServiceContent from "../ServiceContent/ServiceContent";
import TextWithImage from "../TextWithImage/TextWithImage";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

const details = [
  {
    id: 1,
    img: "/0.png",
    title: "Brand Strategy & Art Direction",
  },
];

const Services = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="text-white my-52 flex flex-col lg:flex-row gap-8"
    >
      <TextWithImage></TextWithImage>
      <div className="flex flex-col">
        <motion.div variants={fadeIn("up", "tween", 0.1, 0.5)}>
          <TextBtn>SERVICES</TextBtn>
        </motion.div>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 0.5)}
          className="mb-16 mt-8 w-[60%]"
        >
          We help you to go online and increase your conversion rate Better
          design for your digital products.
        </motion.p>
        <div className="ml-16">
          <ServiceContent></ServiceContent>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
