import React from "react";
import "./Pricing.scss";
import { BsArrowReturnRight } from "react-icons/bs";
import Button from "../button/Button";

const Pricing = () => {
  return (
    <div className="pricing resize_RowToColumn mb-48 gap-8">
      <div className="pricing_top" style={{ flex: 3 }}>
        <div>
          <p>OVER 150.000+ CLIENTS</p>
          <h1>
            Affordable pricing. <br /> Easy scaling.
          </h1>
        </div>
        <div>
          <span>
            Things go wrong have questions. We’ve understand. So <br /> we have
            people
          </span>
          <div>
            <div className="flex flex-wrap flex-row gap-2  items-center my-4">
              {" "}
              <BsArrowReturnRight /> <p>Amazing communication.</p>
            </div>
            <div className="flex flex-wrap flex-row gap-2  items-center my-4">
              {" "}
              <BsArrowReturnRight /> <p>Best trendinf designing experience.</p>
            </div>
            <div className="flex flex-wrap flex-row gap-2  items-center my-4">
              {" "}
              <BsArrowReturnRight /> <p>Email & Live chat.</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="pricing_bottom mt-14 font-bold text-xl"
        style={{ flex: 4 }}
      >
<div className="resize_RowToColumn items-center w-full p-8 rounded-3xl gap-4 justify-between">
          <div>
          <h3>Advanced</h3>
          <p>14 days free</p>
          </div>
          <ul>
            <li>Guarenteed quality control</li>
            <li>Top quality service</li>
            <li>Best experts at your lease</li>
          </ul>
          <div className="flex md:flex-col justify-around flex-wrap items-center justify-center w-full">
            <h2>$ 19</h2>
            <Button>Sign Up</Button>
          </div>
        </div>
        {/* // other section  */}

        <div className="text-black gap-4 items-center resize_RowToColumn bg-[#f08f74] w-full p-8 rounded-3xl gap-4 justify-between">
          <div>
          <h3>Advanced</h3>
          <p>14 days free</p>
          </div>

          <ul>
            <li>Guarenteed quality control</li>
            <li>Top quality service</li>
            <li>Best experts at your lease</li>
          </ul>
          <div className="flex md:flex-col flex-wrap items-center justify-center w-full">
            <h2>$ 19</h2>
            <Button className="btn-black">Sign Up</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
