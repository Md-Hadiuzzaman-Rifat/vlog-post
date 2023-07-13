import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Pricing = () => {
  return (
    <div>
      <div className="pricing_top text-white">
        <div>
          <p>OVER 150.000+ CLIENTS</p>
          <h1>Affordable pricing. Easy scaling.</h1>
        </div>
        <div>
          <p>
            Things go wrong have questions. We’ve understand. So we have people
          </p>
          <div>
            <div>
              {" "}
              <BsArrowReturnRight /> <p>Amazing communication.</p>
            </div>
            <div>
              {" "}
              <BsArrowReturnRight /> <p>Best trendinf designing experience.</p>
            </div>
            <div>
              {" "}
              <BsArrowReturnRight /> <p>Email & Live chat.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing_bottom">
        <div className="text-white">
          <h3>Advanced</h3>
          <p>14 days free</p>
          <ul>
            <li className="text-white">Guarenteed quality control</li>
            <li className="text-white">Top quality service</li>
            <li className="text-white">Best experts at your lease</li>
          </ul>
          <div className="text-white">
            <h1>$ 19</h1>
            <button>Sign Up</button>
          </div>
        </div>
        {/* // other section  */}
        <div className="text-white">
          <h3>Advanced</h3>
          <p>14 days free</p>
          <ul>
            <li className="text-white">Guarenteed quality control</li>
            <li className="text-white">Top quality service</li>
            <li className="text-white">Best experts at your lease</li>
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
