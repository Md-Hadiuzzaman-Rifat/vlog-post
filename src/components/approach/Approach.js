import React from "react";
import TextBtn from "../textBtn/TextBtn";
import SingleApproach from "../singleApproach/SingleApproach";
import { details } from "./approachData";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Approach = () => {
  return (
    <div className="text-white w-full mt-24 flex flex-col justify-center items-center">
      <TextBtn>APPROACH</TextBtn>
      <h1 className="custom-h1 mt-8 mb-20">Our Approach</h1>
      <div className="custom_grid">
        {details.map((item, count) => (
          <motion.div
            key={count}
            variants={fadeIn("up", "tween", (0.01 + count) * 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <SingleApproach
              title={item.title}
              count={item.count}
              details={item.details}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Approach;
