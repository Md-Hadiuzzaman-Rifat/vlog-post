import React from "react";
import "./Features.scss";
import TextBtn from "../textBtn/TextBtn";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import FeatureBox from "../featureBox/FeatureBox";
import LinkText from "../linkText/LinkText";

const details = [
  {
    id: 1,
    img: "/0.png",
    title: "Brand Strategy & Art Direction",
  },
  {
    id: 2,
    img: "/1.png",
    title: "UX/UI Design & Website/App Design",
  },
  {
    id: 3,
    img: "/2.png",
    title: "Engage your customers dramatically.",
  },
];

const Features = () => {
  return (
    <div className="features">
      <div>
        <div>
          <TextBtn>Features</TextBtn>
          <div className="flex items-center resize_RowToColumn justify-between">
            
              <h1 className="custom-h1 text-white my-12">
                We help you to go online & increase your conversion rate.
              </h1>

            <div>
              <Link className="text-white font-extralight text-sm" href="/">
                <LinkText>View All Services</LinkText>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FeatureBox details={details}></FeatureBox>
    </div>
  );
};

export default Features;
