import React from "react";
import "./Pricing.scss";
import { BsArrowReturnRight } from "react-icons/bs";
import Button from "../button/Button";
import { motion } from "framer-motion";
import {
  fadeIn,
  parentVariants,
  staggerChildren,
  staggerContainer,
  childVariants,
} from "@/utils/motion";

const Pricing = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="pricing resize_RowToColumn mb-48 gap-8"
    >
      <div className="pricing_top" style={{ flex: 3 }}>
        <div>
          <motion.p variants={fadeIn("up", "tween", 0.1, 0.5)}>
            OVER 150.000+ CLIENTS
          </motion.p>
          <motion.h1 variants={fadeIn("up", "tween", 0.2, 0.5)}>
            Affordable pricing. <br /> Easy scaling.
          </motion.h1>
        </div>
        <div>
          <motion.div variants={fadeIn("up", "tween", 0.3, 0.6)}>
            <span>
              Things go wrong have questions. We’ve understand. So <br /> we
              have people
            </span>
          </motion.div>
          <motion.div>
            <motion.div
              variants={fadeIn("left", " tween", 0.4, 0.5)}
              className="flex flex-wrap flex-row gap-2  items-center my-4"
            >
              {" "}
              <BsArrowReturnRight /> <p>Amazing communication.</p>
            </motion.div>
            <motion.div
              variants={fadeIn("left", " tween", 0.5, 0.5)}
              className="flex flex-wrap flex-row gap-2  items-center my-4"
            >
              {" "}
              <BsArrowReturnRight /> <p>Best trendinf designing experience.</p>
            </motion.div>
            <motion.div
              variants={fadeIn("left", " tween", 0.6, 0.5)}
              className="flex flex-wrap flex-row gap-2  items-center my-4"
            >
              {" "}
              <BsArrowReturnRight /> <p>Email & Live chat.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div
        className="pricing_bottom mt-14 font-bold text-xl"
        style={{ flex: 4 }}
      >
        <motion.div
          variants={parentVariants(0.2)}
          className="resize_RowToColumn items-center w-full p-8 rounded-3xl gap-4 justify-between"
        >
          <motion.div variants={childVariants}>
            <h3>Advanced</h3>
            <p>14 days free</p>
          </motion.div>
          <motion.ul variants={childVariants}>
            <li>Guarenteed quality control</li>
            <li>Top quality service</li>
            <li>Best experts at your lease</li>
          </motion.ul>
          <motion.div
            variants={childVariants}
            className="flex md:flex-col justify-around flex-wrap items-center justify-center w-full"
          >
            <h2>$ 19</h2>
            <Button>Sign Up</Button>
          </motion.div>
        </motion.div>
        {/* // other section  */}

        <motion.div
          variants={parentVariants(1.2)}
          className="text-black gap-4 items-center resize_RowToColumn bg-[#f08f74] w-full p-8 rounded-3xl gap-4 justify-between"
        >
          <motion.div variants={childVariants}>
            <h3>Advanced</h3>
            <p>14 days free</p>
          </motion.div>

          <motion.ul variants={childVariants}>
            <li>Guarenteed quality control</li>
            <li>Top quality service</li>
            <li>Best experts at your lease</li>
          </motion.ul>
          <motion.div
            variants={childVariants}
            className="flex md:flex-col flex-wrap items-center justify-center w-full"
          >
            <h2>$ 19</h2>
            <Button className="btn-black">Sign Up</Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Pricing;
