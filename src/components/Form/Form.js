"use client"
import React from "react";
import "./Form.scss";
import {useState} from "react";

const Form = () => {
  const [title,setTitle]=useState("")
  const [category,setCategory]=useState("")
  const [text,setText]=useState("")

  const handlePost=async(e)=>{
    e.preventDefault()
    console.log(title,category,text);
    const res=await fetch("/api/auth/posts",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        title,
        category, 
        text
      })
    })
    console.log(res);
  }

  return (
    <form className="form" onSubmit={handlePost}>
      <div className="form_container">
        <div className="form_container_input">
        <h1>POST YOUR BLOG</h1>
          <input type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
          <input type="text" placeholder="Category" onChange={(e)=>setCategory(e.target.value)}/>
          <textarea
            onChange={(e)=>setText(e.target.value)}
            placeholder="Description"
            id=""
            cols="30"
            rows="2"
          ></textarea>
        </div>
      </div>
      <button type="submit" style={{color:"white"}}>Post</button>
    </form>
  );
};

export default Form;
