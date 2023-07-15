import React from "react";
import bg from "../images/footerpic.jpg";
import Image from "next/image";
import bnr from "../images/footerpic.jpg";
import "./FooterBanner.scss";
import CircleBtn from "../circleBtn/CircleBtn";
// fill w-[90%] h-[450px] src={bg} fill

const FooterBanner = () => {
  return (
    <div className="text-white min-h-screen my-24 relative">
      <div className="pos">
        <Image src={bg} className="cover" alt="cover image"></Image>
        <div className="paragraph">
          <div className="text">
            <h3 className=" font-bold text-4xl">
              Have a project in mind?<br />{" "} Lets  
              <span className=" font-sans font-light italic"> get to work.</span>
            </h3>
          </div>
          <CircleBtn></CircleBtn>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
