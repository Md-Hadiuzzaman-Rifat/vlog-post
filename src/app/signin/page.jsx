"use client";
import React from "react";
import "./signin.scss";
import { signIn, useSession } from "next-auth/react";

import { useState } from "react";
import ActionButton from "@/components/ActionButton/ActionButton";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const session = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email , password);
    await signIn("credentials", {
      email,
      password,
    });
  };

  console.log(session.status);
  {
    session?.status === "authenticated" && router?.push('/') 
  }
  {
    session?.status === "loading" && <h1 className="custom-h1">Loading...</h1> 
  }

  return(
  <div className="signIn">
    <h2>Login</h2>
    <div className="signIn_container">
      <form onSubmit={handleSubmit} className="signIn_container_input">
        <input onChange={(e)=>setEmail(e.target.value)} type="" placeholder="Enter Email" />
        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" />
        <ActionButton type="submit">Login</ActionButton>
      </form>
      <button
        onClick={() => signIn("google")}
        className="bg-blue-400 px-4 py-3 rounded-full"
      >
        Google SignIn
      </button>
    </div>
  </div>
)


  }

export default SignIn;

