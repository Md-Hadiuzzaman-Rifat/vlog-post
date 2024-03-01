import React from "react";
import Button from "../button/Button";
import Image from "next/image";
import {motion} from "framer-motion"
import { coverVariants } from "@/utils/motion";


const Banner = () => {
  return (
    <motion.div
      variants={coverVariants}
      initial="hidden"
      whileInView="show"
      viewport={{once:true, amount: 0.25}}
    className="banner_section  min-h-screen items-center resize_RowToColumnMd">
      <div className="flex flex-col mb-24 justify-start banner_section_left flex-1 mb">
        <h1 className="text-5xl tracking-wider text-white font-semibold leading-[4.5rem]">
          Worse design for your digital products.
        </h1>
        <p className="text-white text-sm font-extralight my-4 w-4/6 py-4">
          We are a creative studio specializing in UI/UX design, development and
          strategy.
        </p>
        <div>
          <Button>Explore More</Button>
        </div>
      </div>
      <div className="banner_section_right flex-1 ">
        <Image
          className="w-[100%] mb-24"
          src="/header1.png"
          width={800}
          height={800}
          alt="Header Image"
        ></Image>
      </div>
    </motion.div>
  );
};

export default Banner;
