import React from "react";
import "./Features.scss";
import TextBtn from "../textBtn/TextBtn";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import FeatureBox from "../featureBox/FeatureBox";
import LinkText from "../linkText/LinkText";

const Features = () => {
  return (
    <div className="features">
      <div>
        <div>
          <TextBtn>Features</TextBtn>
          <h2 className="text-white text-2xl font-bold text">
            We help you to go online & increase your conversion rate.{" "}
          </h2>
        </div>
        <div>
          <Link className="text-white font-extralight text-sm" href="/">
            <LinkText>View All Services</LinkText>
          </Link>
        </div>
      </div>
      <FeatureBox></FeatureBox>
    </div>
  );
};

export default Features;
