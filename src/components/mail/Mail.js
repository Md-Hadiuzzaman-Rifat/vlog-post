import React from "react";
import "./Mail.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

const Mail = () => {
  return (
    <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView='show'
        viewport={{once:false , amount:0.25}}
    className="mail-flex">
      <motion.div variants={fadeIn('up',"tween", 0, 0.5)} className="common-mail text-white">
        Have a project in mind?{" "}
      </motion.div>{" "}
      <motion.div variants={fadeIn('up',"tween", 0.1, 0.5)} className="common-mail text-orange-400 underline">
        Let’s get to work
      </motion.div>
    </motion.div>
  );
};

export default Mail;
