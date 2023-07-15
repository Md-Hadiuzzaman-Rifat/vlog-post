import React from "react";
import "./blog.scss";
import BlogTop from "@/components/BlogTop/BlogTop";
import BlogGallery from "@/components/BlogGallery/BlogGallery";
import BlogCompanies from "@/components/BlogCompanies/BlogCompanies";
import CircleBtn from "@/components/circleBtn/CircleBtn";
import Address from "@/components/address/Address";
import FooterBanner from "@/components/footerBanner/FooterBanner";

const Blog = () => {
  return (
    <div className="blog w-[1300px]">
      <div className="blog_container max-w-[100%] px-1 md:px-16 flex flex-col justify-center text-white">
        <BlogTop></BlogTop>
        <BlogGallery></BlogGallery>
        <BlogCompanies></BlogCompanies>
        <FooterBanner></FooterBanner>
        <Address></Address>
      </div>
    </div>
  );
};

export default Blog;
