import React from "react";
import TextBtn from "../textBtn/TextBtn";
import Image from "next/image";
import "./OurBlog.scss"
import LinkText from "../linkText/LinkText";

const OurBlog = () => {
  return (
    <div className="our_blog min-h-screen">
      <TextBtn>OUR BLOG</TextBtn>
      <div className="resize_RowToColumn">
        <h3>Latest News</h3>
        <LinkText>View All Our News</LinkText>
      </div>
      <div className="resize_RowToColumn">
        <div className="flex flex-row">
          <Image src="/1.jpg" width={200} height={300} alt="A person"></Image>
          <div>
            <p>AUGUST 6, 2022</p>
            <h3>Business advertising for your online business.</h3>
            <div>
              {" "}
              <button>Marketing</button> <button>Design</button>{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <Image src="/2.jpg" width={200} height={300} alt="A person"></Image>
          <div>
            <p>AUGUST 6, 2022</p>
            <h3>Business meeting 2023 in San Francisco.</h3>
            <div>
              {" "}
              <button>Marketing</button> <button>Design</button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
