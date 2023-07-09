import React from "react";
import { ClockLoader } from "react-spinners";
import "./Loading.scss"

const Loading = () => {
  return (
    <div className="loading">
      <ClockLoader color="#e5e5e5" cssOverride={{}} loading size={105} />
    </div>
  );
};

export default Loading;
