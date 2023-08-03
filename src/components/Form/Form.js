"use client"
import React from "react";
import "./Form.scss";
import {useState} from "react";
import Image from "next/image";
import ActionButton from "../ActionButton/ActionButton";

const Form = () => {
  const [title,setTitle]=useState("")
  const [category,setCategory]=useState("")
  const [text,setText]=useState("")
  const [image, setImage]= useState("")

  const handleImage=(e)=>{
    const reader= new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload=()=>{
      setImage(reader.result)
    }
    reader.onerror=(error)=>{
      console.log("Error "+error );
    }
  }
 
  const handlePost=async(e)=>{
    e.preventDefault()
    try{
      const response =await fetch('/api/posts',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        }, 
        body:JSON.stringify({title, category, description:text, image})
      })
      console.log(response);
    }catch(err){
      console.log(err);
    }    
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
          <div className="fileUpload">
          <input type="file" onChange={handleImage}/>
          {
            image == "" || image == null ? "": <Image src={image} className="form-img-container" height={100} width={70} alt="done upload"></Image>
          }
          </div>
        </div>
      </div>
      {/* <button type="submit" className="form-btn-style">Post</button> */}
      <ActionButton type="submit">
        Post
      </ActionButton>
    </form>
  );
};

export default Form;
