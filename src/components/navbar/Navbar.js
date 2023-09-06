"use client";
import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { signOut, useSession } from "next-auth/react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const session = useSession();
  const [toggle, setToggle]= useState(false)

  const handleToggle = () => {
      setToggle(toggle=>!toggle)
      console.log(toggle);
  };

  console.log(session.data?.user?.name);
  return (
    <div className="navbar bg-[#1d1d1d] w-full text-white px-12 py-4">
      <div className="navbar_content flex flex-row md:justify-around justify-between">
        <div className="navbar_lef">
          <Link href="/">
            <h3 className="">GeekFolio</h3>
          </Link>
        </div>

        <div className="navbar_middle flex flex-wrap justify-center gap-6 hidden md:flex">
          <Link href="/about">About</Link>
          <Link href="/newsfeed">NewsFeed</Link>
        </div>

        <div className="navbar_right hidden md:flex">
          {session.status === "authenticated" && (
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                className="border-2 border-gray-400 rounded-full px-4 text-red-400 py-1"
                href="/profile"
              >
                Profile
              </Link>
              <Link href="/" onClick={() => signOut()}>
                Logout
              </Link>
            </div>
          )}
          {session.status === "unauthenticated" && (
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/signin">SignIn</Link>
              <Link href="/register">Register</Link>
            </div>
          )}
        </div>

        {/* toggle menu on small screen  */}
        <div onClick={handleToggle} className="navSmall text-2xl cursor-pointer flex md:hidden">
          <IoReorderThreeOutline></IoReorderThreeOutline>
        </div>

        {
          toggle && (
            <div className="dropwdown absolute top-[70px] right-[40px] bg-slate-700">
          <ul>
            <li className="p-4 cursor-pointer hover:bg-black delay-75 duration-100">
              <Link onClick={handleToggle} href="/about ">About</Link>
            </li>

            <li className="p-4 cursor-pointer hover:bg-black delay-75 duration-100">
              <Link onClick={handleToggle} href="/newsfeed ">Newsfeed</Link>
            </li>

            {session.status === "authenticated" && (
              <li className="p-4 cursor-pointer hover:bg-black delay-75 duration-100">
                <Link onClick={handleToggle} href="/profile">Profile</Link>
              </li>
            )}

            {session.status === "unauthenticated" && (
              <li className="p-4 cursor-pointer hover:bg-black delay-75 duration-100">
                <Link onClick={handleToggle} href="/register">Register</Link>
              </li>
            )}

            {session.status === "unauthenticated" && (
              <li className="p-4 cursor-pointer hover:bg-black delay-75 duration-100">
                <Link onClick={handleToggle} href="/signin">Login</Link>
              </li>
            )}

            {session.status === "authenticated" && (
              <li className="p-4 cursor-pointer hover:bg-black delay-75 duration-100" onClick={handleToggle}>
                <Link href="/" onClick={() => signOut()}>
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
          )
        }
      
      </div>
    </div>
  );
};

export default Navbar;
