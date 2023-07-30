import React from "react";
import bg from "../images/footerpic.jpg";
import Image from "next/image";
import bnr from "../images/footerpic.jpg";
import "./FooterBanner.scss";
import CircleBtn from "../circleBtn/CircleBtn";
import {motion} from "framer-motion"
import { childVariants, slideIn, staggerContainer } from "@/utils/motion";

const FooterBanner = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false, amount: 0.25}}
    className="text-white min-h-screen my-24 relative">
      <div className="pos">
        <Image src={bg} className="cover" alt="cover image"></Image>
        <div className="paragraph">
          <motion.div variants={slideIn("up", "tween", 0.2, 0.5)} className="text">
            <h3 className=" font-bold text-4xl">
              Have a project in mind?<br />{" "} Lets  
              <span className=" font-sans font-light italic"> get to work.</span>
            </h3>
          </motion.div>
          <CircleBtn></CircleBtn>
        </div>
      </div>
    </motion.div>
  );
};

export default FooterBanner;
