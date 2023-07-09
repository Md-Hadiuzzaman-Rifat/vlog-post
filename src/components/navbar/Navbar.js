import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar bg-[#1d1d1d] w-full text-white px-12 py-4" >
      <div className="navbar_content flex flex-row justify-around">
        <div className="navbar_lef">
          <Link href="/"><h3 className="">GeekFolio</h3></Link>
        </div>
        <div className="navbar_middle flex flex-wrap justify-center gap-6">
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/profile">Profile</Link>
          <BsSearch className="self-center"></BsSearch>
        </div>
        <div className="navbar_right">
          <Link href="/profile">Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
