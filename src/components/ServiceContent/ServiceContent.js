import React from 'react';
import {motion} from "framer-motion"
import { childVariants, parentVariants } from '@/utils/motion';

const ServiceContent = () => {
    return (
        <motion.div variants={parentVariants(0.1)}>
          <motion.div variants={childVariants} className="flex items-center mt-8">
            <p className="text-xl font-bold mr-8">01</p>{" "}
            <span className="custom-h1">UI/UX Design</span>
          </motion.div>
          <motion.div variants={childVariants} className="flex items-center mt-8">
            <p className="text-xl font-bold mr-8">02</p>{" "}
            <span className="custom-h1">Branding</span>
          </motion.div>
          <motion.div variants={childVariants} className="flex items-center mt-8">
            <p className="text-xl font-bold mr-8">03</p>{" "}
            <span className="custom-h1">Development</span>
          </motion.div>
          <motion.div variants={childVariants} className="flex items-center mt-8">
            <p className="text-xl font-bold mr-8">04</p>{" "}
            <span className="custom-h1">Marketing</span>
          </motion.div>
        </motion.div>
    );
};

export default ServiceContent;