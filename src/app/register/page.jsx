"use client";
import React from "react";
import "./register.scss";
import { useState } from "react";
import LoginBtn from "@/components/loginBtn/LoginBtn";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import ActionButton from "@/components/ActionButton/ActionButton";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const session = useSession();
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      res.status === 201 && router.push("/signin");
    } catch (err) {
      setErr(err);
      console.log(err);
    }
  };
  // if unauthenticated
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
              {/* {err && <p className="text-red-500">{err}</p>} */}
              <ActionButton type="submit">Register</ActionButton>
            </form>
          </div>
        </div>
      );
    }
  }
};

export default Register;
