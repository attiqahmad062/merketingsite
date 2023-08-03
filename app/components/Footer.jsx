import React from "react";
import { FaSnapchatGhost } from "react-icons/fa";
import { FiFacebook } from "react-icons/fI";
import { BiLogoInstagram } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly mt-16 mb-4">
      <div>
        <img
          className="h-16 w-52"
          src="https://amindset.co/img/logs.f7f5f80a.png"
          alt=""
        />
        <p className="text-center">Quality Care one person at a time</p>
        <ul className="flex gap-8 items-center justify-center mt-4 ">
          <li className="text-blue-400 ">
            <a href="/"><FaSnapchatGhost  size="40px" /></a>
          </li>
          <li className="text-blue-400 ">
           <a href="/"> <FiFacebook size="40px"/></a>
          </li>
          <li className="text-blue-400">
           <a href=""> <BiLogoInstagram size="40px"/></a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2  flex-col">
        <p  className="text-xl font-bold mb-4">Main</p>
        <a href="/" className="bg-blue-400 text-white px-6 py-2  rounded-md hover:bg-blue-400 hover:text-white ">Home</a>
        <a href="/" className="bg-gray-200  px-6 py-2  rounded-md hover:bg-blue-400 hover:text-white ">About Us</a>
        <a href="/" className="bg-gray-200  px-6 py-2  rounded-md hover:bg-blue-400 hover:text-white ">Find Provider</a>
        <a href="/" className="bg-gray-200   px-6 py-2  rounded-md hover:bg-blue-400 hover:text-white ">FAQ's</a>
      </div>
       <div className="flex items-center  gap-1 flex-col">
        <p className="text-xl font-bold mb-4">Resources</p>
        <a href="/" className="bg-gray-200  px-6 py-2 rounded-md hover:bg-blue-400 hover:text-white  ">Contact Us</a>
        <a href="/" className="bg-gray-200  px-6 py-2 rounded-md hover:bg-blue-400 hover:text-white  ">Privacy</a>
        <a href="/" className="bg-gray-200  px-6 py-2 rounded-md hover:bg-blue-400 hover:text-white  ">Crisis</a>
        <a href="/" className="bg-gray-200   px-6 py-2 rounded-md hover:bg-blue-400 hover:text-white  ">Career</a>
        <a href="/" className="bg-gray-200   px-6 py-2 rounded-md hover:bg-blue-400 hover:text-white  ">HealthCare Providers</a>
        <a href="/" className="bg-gray-200   px-6 py-2 rounded-md hover:bg-blue-400 hover:text-white  ">Terms & Conditions</a>
      </div>
    </div>
  );
};

export default Footer;
