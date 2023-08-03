import React from "react";
import TextBtn from "../textBtn/TextBtn";
import Image from "next/image";
import "./OurBlog.scss"
import LinkText from "../linkText/LinkText";
import {motion} from "framer-motion"
import { fadeIn, staggerContainer } from "@/utils/motion";

const OurBlog = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false, amount: 0.25}}
    className="our_blog mb-24 min-h-screen">
      <TextBtn>OUR BLOG</TextBtn>
      <div className="flex flex-col md:flex-row justify-between gap-4 items-start">
        <h1 className="custom-h1 mt-4 mb-12">Latest News</h1>
        <LinkText>View All Our News</LinkText>
      </div>
      <div className="resize_RowToColumn gap-8 mt-12">
        <motion.div
          variants={fadeIn("right", "tween", 0, 0.8)}
        className="flex sm:flex-row flex-col gap-8">
          <Image src="/1.jpg" className="object-cover min-w-[250px] max-w-[400px] sm:w-full rounded-l-lg" width={200} height={300} alt="A person"></Image>
          <div className="flex flex-col gap-8">
            <p>AUGUST 6, 2022</p>
            <h1 className="custom-h1">Business advertising for your online business.</h1>
            <div>
            {" "}
              <button className="border-gray-600 text-white px-4 py-2 hover:bg-orange-400 rounded">Marketing</button> <button className="border-gray-600 text-white px-4 py-2 hover:bg-orange-400 rounded">Design</button>{" "}
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('left',"tween", 0, 0.8)}
        className="flex sm:flex-row flex-col gap-8">
          <Image src="/2.jpg" className="object-cover min-w-[250px] max-w-[400px] sm:w-full rounded-l-lg" width={200} height={300} alt="A person"></Image>
          <div className="flex flex-col gap-8">
            <p>AUGUST 6, 2022</p>
            <h1 className="custom-h1">Business meeting 2023 in San Francisco.</h1>
            <div>
              {" "}
              <button className="border-gray-600 text-white px-4 py-2 hover:bg-orange-400 rounded">Marketing</button> <button className="border-gray-600 text-white px-4 py-2 hover:bg-orange-400 rounded">Design</button>{" "}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurBlog;
