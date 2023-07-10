import React from "react";
import "./signin.scss";
const page = () => {
  return (
    <div className="signIn">
      <h2>Login</h2>
      <div className="singIn_container">
        <div className="signIn_container_input">
          <input type="" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
        </div>
      </div>
    </div>
  );
};

export default page;
