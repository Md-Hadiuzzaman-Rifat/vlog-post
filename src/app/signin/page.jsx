"use client";
import React from "react";
import "./signin.scss";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import {useState} from "react";

const SignIn = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const session = useSession();
  console.log(session.data?.user?.name);

  const handleSubmit=async(e)=>{
    e.preventDefault()
    // console.log(email , password);
    await signIn('credentials',{
      email,password
    })
  }

  return (
    <div className="signIn">
      <h2>Login</h2>
      <div className="signIn_container">
        <form onSubmit={handleSubmit} className="signIn_container_input">
          <input onChange={(e)=>setEmail(e.target.value)} type="" placeholder="Enter Email" />
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" />
          <button type="submit" style={{ backgroundColor: "white" }}>Login</button>
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
