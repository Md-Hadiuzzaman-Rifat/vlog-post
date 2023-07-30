import Image from "next/image";
import React from "react";
import "./BlogGallery.scss";
import {motion} from "framer-motion"
import { fadeIn, staggerContainer } from "@/utils/motion";

const BlogGallery = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false, amount:0.25}}
    className="Gallery blog-container">
      <div className="resize_RowToColumn mb-24 gap-5 md:justify-between">
        <motion.div
          variants={fadeIn("right", "tween", 0, 0.5)}
        className="blog-images" style={{ flex: 2 }}>
          <Image
            style={{ height: "400px", objectFit: "cover", borderRadius: "5%" }}
            src="/sq1.jpg"
            width={400}
            height={400}
            alt="discuss"
          ></Image>
        </motion.div>
        <motion.div variants={fadeIn("left", "tween", 0, 0.5)} style={{ flex: 3 }}>
          <Image
            style={{
              objectFit: "cover",
              width: "700px",
              height: "400px",
              borderRadius: "5%",
            }}
            src="/sq2.jpg"
            width={400}
            height={400}
            alt="dedication"
          ></Image>
        </motion.div>
      </div>
      <div className="story resize_RowToColumn ">
        <motion.div variants={fadeIn("up", "tween", 0.1, 0.5)} style={{ flex: 2, marginBottom:"50px" }} className="custom-p">
          OUR STORY.
        </motion.div>
        <motion.div variants={fadeIn("up", "tween", 0.2, 0.5)} style={{ flex: 5 }} className="custom-h1 blog-body">
          GeekFolio are digital marketing experts and can partner with you to
          implement tactical campaigns which engage and connect audiences whilst
          driving ROI for your brand. We are SEO and SEM professionals and have
          implemented successful search campaigns for clients which drive
          super-charge improvements in organic rankings, increase visits and
          grow revenue.
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogGallery;
