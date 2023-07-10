"use client"
import React from "react";
import "./register.scss";
import {useState} from "react";

const Register = () => {
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  return (
    <div className="register">
      <h2>SignUp</h2>
      <div className="register_container">
        <div className="register_container_input">
          <input type="" placeholder="Enter Name" />
          <input type="" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
        </div>
      </div>
    </div>
  );
};

export default Register;
