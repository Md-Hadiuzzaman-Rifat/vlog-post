import React from "react";
import BlogTextAnim from "../BlogTextAnim/BlogTextAnim";

const BlogTop = () => {
  return (
    <div className="blog-container max-w-full">
      <div className="gap-8 py-12 mb-36 custom-p h-[80vh] flex flex-col justify-end">
        <li> WHO WE ARE ?</li>
        <h1 className="large-h1 max-w-[70%]">
          We&apos;re a digital agency based in Valencia.
        </h1>
        <div className="custom-p self-center mt-6 max-w-[400px]">
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </div>
        <BlogTextAnim></BlogTextAnim>
      </div>
    </div>
  );
};

export default BlogTop;
