import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  console.log(session?.status);
  return (
    <div className="navbar bg-[#1d1d1d] w-full text-white px-12 py-4">
      <div className="navbar_content flex flex-row justify-around">
        <div className="navbar_lef">
          <Link href="/">
            <h3 className="">GeekFolio</h3>
          </Link>
        </div>
        <div className="navbar_middle flex flex-wrap justify-center gap-6">
          <Link href="/about">About</Link>
          <Link href="/newsfeed">NewsFeed</Link>
          {/* <BsSearch className="self-center"></BsSearch> */}
        </div>
        <div className="navbar_right">
          {session.status === "authenticated" && (
            <div className="flex flex-wrap justify-center gap-6">
              <Link className="border-2 border-gray-400 rounded-full px-4 text-red-500 py-1" href="/profile">Profile</Link>
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
      </div>
    </div>
  );
};

export default Navbar;
