import React from "react";
import BlogBtn from "../BlogBtn/BlogBtn";
import "./BlogCompanies.scss";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

const BlogCompanies = () => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.1, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="custom-h1 w-full text-center my-20 min-h-[100px]">
        We create experiences and <br /> turn ideas into reality.
      </div>
      <div className="grid">
          <BlogBtn>NIKE</BlogBtn>
          <BlogBtn>ADIDAS</BlogBtn>
          <BlogBtn>PUMA</BlogBtn>
          <BlogBtn>GUCCI</BlogBtn>
          <BlogBtn>TIMBER</BlogBtn>
          <BlogBtn>ASICS</BlogBtn>
      </div>
    </motion.div>
  );
};

export default BlogCompanies;
