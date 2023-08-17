import Dropdown from "./dropdownMenu";
import { useState, useEffect } from "react";
const navigation = ["our process", "our work", "about us"];

const listItems = navigation.map((item) => (
  <li
    key="{item}{item}"
    className="hover:bg-red-600 hover:text-white py-2 px-4 rounded-full h-[90%] text-center  "
  >
    <a href="">{item}</a>
  </li>
));

function Header() {
  const [show, setShow] = useState(false);
  function HandleClick() {
    setShow((show) => !show);
  }
  let ToggleClassCheck = show
    ? "bg-white   text-black bg-opacity-100"
    : "bg-gray-600 text-white bg-opacity-75";

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div
      onClick={HandleClick}
      className={` transition   ease-in-out ${ToggleClassCheck} ${
        visible ? "translate-y-0" : "-translate-y-[200px]"
      }  hover:text-black sticky top-10 left-0 right-0 z-90 hover:bg-white    h-fill py-2 justify-between   px-4  flex     w-[90%] mx-auto rounded-full      font-["kanit"]  font-light   `}
    >
      <h1 className=" z-40   text-[30px] md:text-[28px] font-semibold pl-2  tracking-wider">
        DINZA
      </h1>

      <ul className="hidden md:flex    items-center gap-7 text-[14px] ">
        {listItems}
      </ul>

      <button
        className={
          " px-[20px] py-[8px]  rounded-3xl bg-black  text-[16px] text-white  gap-1 hidden md:flex  "
        }
      >
        contact <img src="xx" alt="xx" />
      </button>

      <div className={`md:hidden   `}>
        <Dropdown />
      </div>
    </div>
  );
}

export default Header;
