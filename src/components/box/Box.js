import Image from "next/image";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Box = ({ img, title }) => {
  return (
    <div className="mt-12 min-w-[30%] w-full">
      <div className="border-[0.5px] text-white text-sm font-bold border-gray-600 rounded-md px-12 py-16">
        <Image src={img} width={60} height={60} alt="Brand Strategy"></Image>
        <h3 className="mt-12 mb-8">{title}</h3>
        <div className="flex gap-2 align-center mt-4 text-xs justify-start flex-wrap">
          <FaChevronRight />
          <p className=" font-extralight text-xs">User friendly interface</p>
        </div>
        <div className="flex gap-2 align-center mt-4 text-xs justify-start">
          <FaChevronRight />
          <p className=" font-extralight text-xs">
            Nothing distracts from work
          </p>
        </div>
        <div className="flex gap-2 align-center mt-4 text-xs justify-start">
          <FaChevronRight />
          <p className=" font-extralight text-xs">Easy to start chatting</p>
        </div>
      </div>
    </div>
  );
};

export default Box;
