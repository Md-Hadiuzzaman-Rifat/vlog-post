import React from "react";
import "./Form.scss";

const Form = () => {
  return (
    <div className="form">
      <div className="form_container">
        <div className="form_container_input">
        <h1>POST YOUR BLOG</h1>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Category" />
          <textarea
            placeholder="Description"
            id=""
            cols="30"
            rows="2"
          ></textarea>
        </div>
        .form_container
      </div>
    </div>
  );
};

export default Form;
