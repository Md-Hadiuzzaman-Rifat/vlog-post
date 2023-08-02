"use client";
import React from "react";
import "./blog.scss";
import BlogTop from "@/components/BlogTop/BlogTop";
import BlogGallery from "@/components/BlogGallery/BlogGallery";
import BlogCompanies from "@/components/BlogCompanies/BlogCompanies";
import CircleBtn from "@/components/circleBtn/CircleBtn";
import Address from "@/components/address/Address";
import FooterBanner from "@/components/footerBanner/FooterBanner";
import MovingText from "@/components/MovingText/MovingText";
import Team from "@/components/Team/Team";
import { ParallaxProvider } from "react-scroll-parallax";
import Scroll from "@/components/Scroll/Scroll";
import { useState, useEffect } from "react";
import Loading from "@/components/loading/Loading";

const Blog = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(counter, 1000);
  }, []);

  const counter = () => {
    setLoading((data) => !data);
  };
  return (
    <div className="blog w-[1300px]">
      {loading && <Loading></Loading>}
      {!loading && (
        <div>
          <BlogTop></BlogTop>
          <BlogGallery></BlogGallery>
          <MovingText></MovingText>
          <BlogCompanies></BlogCompanies>
          <FooterBanner></FooterBanner>
          <ParallaxProvider>
            <Team></Team>
            <Scroll></Scroll>
          </ParallaxProvider>
          <Address></Address>
        </div>
      )}
    </div>
  );
};

export default Blog;
