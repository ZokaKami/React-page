import React, { useState } from "react";
import logo from "./images/hamburgerMenu.png";
import Dropdown from "./dropdown";
import { useRef } from "react";

function Header() {
  return (
    <>
      <div className="text-white hover:text-black bg-gray-600  hover:bg-white relative  h-fill py-2 justify-between   px-4 mt-4 flex   duration-500 w-[90%] mx-auto rounded-full   bg-opacity-75  font-['kanit']  font-light  ">
        <h1 className=" z-40   text-[24px] md:text-[28px] font-semibold pl-2  tracking-wider">
          CINZA
        </h1>

        <ul className="hidden md:flex    items-center gap-7 text-[14px] ">
          <li className="hover:bg-red-600 hover:text-white py-2 px-4 rounded-full h-[90%] text-center duration-500 ease-in-out">
            <a href="">our process</a>
          </li>
          <li className="hover:bg-red-600 hover:text-white py-2 px-4 rounded-full h-[90%] text-center duration-500 ">
            <a href=""> our work</a>
          </li>
          <li className="hover:bg-red-600 hover:text-white py-2 px-4 rounded-full h-[90%] text-center duration-500">
            <a href="">about us</a>
          </li>
        </ul>

        <button className="px-[20px] py-[8px]  rounded-3xl bg-black  text-[16px] text-white  gap-1 hidden md:flex  ">
          contact <img src="xx" alt="xx" />
        </button>
        <div className="md:hidden">
          <Dropdown />
        </div>
      </div>
    </>
  );
}

export default Header;
