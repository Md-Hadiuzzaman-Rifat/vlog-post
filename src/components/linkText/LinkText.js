import React from "react";
import "./LinkText.scss";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const LinkText = ({ children }) => {
  return (
    <Link className="link_text" href="/">
      <div className="link_text_content  max-w-[165px]"><div style={{backgroundColor:"rgba(255, 255, 255, 0.3)"}}></div>{children} <AiOutlineArrowRight/></div> 
    </Link>
  );
};

export default LinkText;
