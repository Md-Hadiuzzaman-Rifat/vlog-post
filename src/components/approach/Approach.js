import React from "react";
import TextBtn from "../textBtn/TextBtn";
import SingleApproach from "../singleApproach/SingleApproach";

const details = [
  {
    title: "RESEARCH",
    count: 1,
    details: "We help you to go online and increase your conversion rete.",
  },
  {
    title: "CONCEPT",
    count: 2,
    details: "We help you to go online and increase your conversion rete.",
  },
  {
    title: "IMPLEMENT",
    count: 3,
    details: "We help you to go online and increase your conversion rete.",
  },
  {
    title: "HANDOVER",
    count: 4,
    details: "We help you to go online and increase your conversion rete.",
  },
];

const Approach = () => {
  return (
    <div className="text-white w-full mt-24 flex flex-col justify-center items-center">
      <TextBtn>APPROACH</TextBtn>
      <h1 className="custom-h1 mt-8 mb-20">Our Approach</h1>
      <div className="custom_grid">
        {details.map((item) => (
          <SingleApproach
            key={details.count}
            title={item.title}
            count={item.count}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Approach;
