import React from "react";
import TextBtn from "../textBtn/TextBtn";
import SingleApproach from "../singleApproach/SingleApproach";

const Approach = () => {
  return (
    <div className="text-white">
      <TextBtn>APPROACH</TextBtn>
      <h1>Our Approach</h1>
      <div className="resize_RowToColumn">
        <SingleApproach></SingleApproach>
        <SingleApproach></SingleApproach>
        <SingleApproach></SingleApproach>
        <SingleApproach></SingleApproach>
        
      </div>
    </div>
  );
};

export default Approach;
