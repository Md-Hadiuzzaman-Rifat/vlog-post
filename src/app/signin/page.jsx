"use client";
import React from "react";
import "./signin.scss";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

const SignIn = () => {
  const session = useSession();
  console.log(session.data?.user?.name);

  return (
    <div className="signIn">
      <h2>Login</h2>
      <div className="signIn_container">
        <form className="signIn_container_input">
          <input type="" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button style={{ backgroundColor: "white" }}>Login</button>
        </form>
        <button
          onClick={() => signIn("google")}
          className="bg-red-400 px-4 py-2 rounded-full"
        >
          Google SignIn
        </button>
      </div>
    </div>
  );
};

export default SignIn;
