"use client";
import React from "react";
import "./register.scss";
import { useState } from "react";
import LoginBtn from "@/components/loginBtn/LoginBtn";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Loading from "@/components/loading/Loading";
import useSWR from 'swr'

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const session = useSession();
  const router = useRouter();

  // const {data}=useSWR("/api/auth/register")

  const handleRegister = async (e) => {
    e.preventDefault();
    // console.log(name,email,password);
    // try {
    //   const res = await fetch("api/auth/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name,
    //       email,
    //       password,
    //     }),
    //   });
    //   console.log(res);
    // } 
    
    try{
      fetch("/api/auth/register",(url)=>postData(url,{name,email,password}))
    }
    catch (err) {
      setErr(true);
    }
  };
  // if authenticated
  {
    session?.status === "authenticated" && router.push("/")
  } 
  // if loading
  {
    session?.status === "loading" && <Loading></Loading>;
  }
  // if authenticated
  {
    if (session?.status === "unauthenticated") {
      return (
        <div className="register">
          <h2>SignUp</h2>
          <div className="register_container">
            <form
              onSubmit={handleRegister}
              className="register_container_input"
            >
              <input
                type=""
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type=""
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {err && <p className="text-red-500">{err}</p>}
              <LoginBtn>LogIn</LoginBtn>
            </form>
          </div>
        </div>
      );
    }
  }
};


export default Register;
