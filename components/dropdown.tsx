import React, { useState } from "react";
import telegram from "./images/telegram.png";

function Dropdown() {
  const [showMenu, setShowMenu] = useState(false);

  let menu;
  if (showMenu) {
    menu = (
      <nav className="md:hidden  duration-500 absolute top-5 left-0 right-0 text-black   h-auto  w-[100%] mx-auto  bg-white text-center pt-6 z-20  font-['kanit'] text-[18px] rounded-b-3xl  ">
        <h1 className="pt-4">
          <a href="">our process</a>
        </h1>
        <h1 className=" pt-4">
          <a href="">our work</a>
        </h1>
        <h1 className=" py-4">
          <a href="">about us</a>
        </h1>
        <button className="px-[20px] py-[8px]  rounded-3xl bg-black text-white    flex mx-auto gap-1 ">
          contact <img src="xx" alt="xx" />
        </button>

        <ul className="flex w-full h-full bg-red-950 text-white py-8 rounded-b-3xl mt-4">
          <li className="w-1/2 text-[10px] space-y-[2px] ">
            <img className="w-8 mx-auto" src={telegram} alt="" />
            <p>
              <a href="">Email</a>
            </p>
            <p>
              <a href="telegram.com">telegram@gmail.com</a>
            </p>
          </li>
          <li className="w-1/2 text-[10px] space-y-[2px]">
            <img className="w-8 mx-auto" src={telegram} alt="" />
            <p>
              <a href="">Email</a>
            </p>
            <p>
              <a href="telegram.com">telegram@gmail.com</a>
            </p>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <>
      <span>
        {" "}
        <img
          src="x"
          alt="x"
          onClick={() => setShowMenu(!showMenu)}
          className="relative   z-40 text-black md:hidden"
        />
      </span>
      {menu}
    </>
  );
}

export default Dropdown;
