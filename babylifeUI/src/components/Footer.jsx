import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">Loerm</p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>HOME</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+989053356417</li>
            <li>davodkhaniabbas2003@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py5 text-sm text-center ">
          {" "}
          Copyright 2025@ davodkhaniabbas2003
        </p>
      </div>
    </div>
  );
};

export default Footer;
