import Image from "next/image";
import React from "react";
import AccordionModal from "../accordionModal/AccordionModal";
import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "@/utils/motion";

const Accordion = () => {
  return (
    // shadow on the accordion
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="accordion mt-8 mb-24"
    >
      <div className="flex flex-col">
        <div className="self-end opacity-25">
          <Image width={150} height={100} src="/shap2.png" alt="design"></Image>
        </div>
        {/* main accordion start  */}
        <div className="accordion_main gap-12 flex flex-col md:flex-row justify-between items-center min-h-screen mt-8">
          <motion.div
            variants={fadeIn("right", "tween", 0, 0.5)}
            className="accordion_main_image w-10/12"
          >
            <Image
              style={{ flex: 1 }}
              src="/a1.png"
              width={500}
              height={200}
              alt="accordion-image"
            ></Image>
          </motion.div>
          {/* // real accordion  */}
          <div style={{ width: "70%" }}>
            <motion.h3
              variants={fadeIn("up", "tween", 0, 0.5)}
              className="font-bold mb-8 text-3xl mb-6 text-white"
            >
              We grow brands through bold & strategic creative
            </motion.h3>
            <AccordionModal></AccordionModal>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Accordion;
