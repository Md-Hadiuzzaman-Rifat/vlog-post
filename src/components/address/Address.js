import Link from "next/link";
import React from "react";
import "./Address.scss";

const Address = () => {
  return (
    <div className="address blog-container max-w-[100%] flex flex-col min-h-[70vh] justify-between">
      <div className="resize_RowToColumn justify-evenly gap-8">
        <div
          className="address_left text-white justify-evenly flex flex-row gap-8"
          style={{ flex: 1 }}
        >
          <div>
            <h3>Address</h3>
            <p>
              Germany — 785 15h Street, Office <br /> 478 Berlin, De 81566
            </p>
          </div>
          <div>
            <h3>Say Hello</h3>
            <p>hadirifat100@gmail.com</p>
            <h3 className="text-xl my-4 text-orange-300">+880 1910803372</h3>
          </div>
        </div>
        <div
          className="address_right text-white flex flex-row justify-evenly gap-8"
          style={{ flex: 1 }}
        >
          <div>
            <h3>Social</h3>
            <Link
              target="_blank"
              href="https://www.facebook.com/mdhadiuzzamanrifat/"
            >
              FACEBOOK
            </Link>{" "}
            <br />
            <Link target="_blank" href="https://twitter.com/md_hadi_rifat">
              TWITTER
            </Link>{" "}
            <br />
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/md-hadiuzzaman-rifat/"
            >
              LINKEDIN
            </Link>{" "}
            <br />
            <Link
              target="_blank"
              href="https://www.instagram.com/mdhadiuzzamanrifat/"
            >
              INSTAGRAM
            </Link>
          </div>
          <div>
            <h3>Newsletter</h3>
            <input
              placeholder="Type Your Email"
              className="address_input"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="address_bottom resize_RowToColumn">
        <h3>GeekFolio</h3>
        <p>© 2023 Geekfolio is Proudly Powered by Ui-ThemeZ</p>
      </div>
    </div>
  );
};

export default Address;
