import React from "react";
import BlogTextAnim from "../BlogTextAnim/BlogTextAnim";
import {motion} from "framer-motion"
import { fadeIn, staggerContainer } from "@/utils/motion";

const BlogTop = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false, amount: 0.25}}
    className="blog-container max-w-full">
      <div className="gap-8 py-12 mb-36 custom-p h-[80vh] flex flex-col justify-end">
        <motion.li variants={fadeIn("right", "tween", 0, 0.5)}> WHO WE ARE ?</motion.li>
        <motion.h1 variants={fadeIn("right", "tween", 0.1, 0.5)} className="large-h1 max-w-[70%]">
          We&apos;re a digital agency based in Valencia.
        </motion.h1>
        <motion.div variants={fadeIn('right', "tween", 0.2, 0.5)} className="custom-p self-center mt-6 max-w-[400px]">
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </motion.div>
        <BlogTextAnim></BlogTextAnim>
      </div>
    </motion.div>
  );
};

export default BlogTop;
