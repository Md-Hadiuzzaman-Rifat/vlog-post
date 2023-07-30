import React from "react";
import "./Features.scss";
import TextBtn from "../textBtn/TextBtn";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import FeatureBox from "../featureBox/FeatureBox";
import LinkText from "../linkText/LinkText";
import { details } from "./data";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "@/utils/motion";

const Features = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="features"
    >
      <div>
        <div>
          <motion.div variants={fadeIn("right", "tween", 0, 0.5)}>
            <TextBtn>Features</TextBtn>
          </motion.div>
          <div className="flex items-center resize_RowToColumn justify-between">
            <motion.h1 variants={fadeIn("up", "tween", 0, 1)} className="custom-h1 text-white my-12">
              We help you to go online & increase your conversion rate.
            </motion.h1>

            <motion.div
              variants={fadeIn("left", "tween", 0.1, 0.5)}
            >
              <Link className="text-white font-extralight text-sm" href="/">
                <LinkText>View All Services</LinkText>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <FeatureBox details={details}></FeatureBox>
    </motion.div>
  );
};

export default Features;
