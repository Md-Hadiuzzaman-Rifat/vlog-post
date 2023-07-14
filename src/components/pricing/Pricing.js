import React from "react";
import "./Pricing.scss";
import { BsArrowReturnRight } from "react-icons/bs";

const Pricing = () => {
  return (
    <div className="pricing resize_RowToColumn">
      <div className="pricing_top">
        <div>
          <p>OVER 150.000+ CLIENTS</p>
          <h1>Affordable pricing. <br /> Easy scaling.</h1>
        </div>
        <div>
          <span>
            Things go wrong have questions. We’ve understand. So <br /> we have people
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
      <div className="pricing_bottom">
        <div>
          <h3>Advanced</h3>
          <p>14 days free</p>
          <ul>
            <li>Guarenteed quality control</li>
            <li>Top quality service</li>
            <li>Best experts at your lease</li>
          </ul>
          <div>
            <h1>$ 19</h1>
            <button>Sign Up</button>
          </div>
        </div>
        {/* // other section  */}
        <div>
          <h3>Advanced</h3>
          <p>14 days free</p>
          <ul>
            <li>Guarenteed quality control</li>
            <li>Top quality service</li>
            <li>Best experts at your lease</li>
          </ul>
          <div>
            <h1>$ 19</h1>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
