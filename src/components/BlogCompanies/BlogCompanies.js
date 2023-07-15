import React from 'react';
import BlogBtn from "../BlogBtn/BlogBtn"
import "./BlogCompanies.scss";

const BlogCompanies = () => {
    return (
        <div>
            <div className="custom-h1 text-center my-20 min-h-[100px]">We create experiences and <br /> turn ideas into reality.</div>
            <div className="grid">
            <BlogBtn>NIKE</BlogBtn>

            <BlogBtn>ADIDAS</BlogBtn>
            <BlogBtn>PUMA</BlogBtn>
            <BlogBtn>GUCCI</BlogBtn>
            <BlogBtn>TIMBER</BlogBtn>
            <BlogBtn>ASICS</BlogBtn>
            </div>
        </div>
    );
};

export default BlogCompanies;