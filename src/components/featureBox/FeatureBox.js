import React from "react";
import Box from "../box/Box";
import "./FeatureBox.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/utils/motion";

const FeatureBox = ({ details, bg }) => {
  return (
    <div className="resize_RowToColumn">
      {details.map((single, count) => (
        <motion.div
          key={count.id}
          variants={fadeIn("right", "tween", (count + 0.1) * 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <Box img={single.img} title={single.title} />
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureBox;
