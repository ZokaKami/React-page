import { useState } from "react";
import telegram from "./images/telegram.png";
import hamburgerWhite from "./images/hamburgerWhite.png";
import hamburgerBlack from "./images/hamburgerBlack.png";

function Dropdown() {
  const [showMenu, setShowMenu] = useState(false);
  const navigation = ["our process", "our work", "about us"];
  const listItems = navigation.map((item) => (
    <li key="{item}" className="p-[10px]">
      <a href="">{item}</a>
    </li>
  ));

  let menu;
  if (showMenu) {
    menu = (
      <nav className="md:hidden  duration-500 absolute top-5 left-0 right-0 text-black   h-auto  w-[100%] mx-auto  bg-white text-center pt-6 z-20  font-['kanit'] text-[24px] rounded-b-3xl  ">
        <ul>{listItems}</ul>

        <button className="px-[20px] py-[8px] mt-2 rounded-3xl bg-black text-white    flex mx-auto gap-1 ">
          contact <img src="xx" alt="xx" />
        </button>

        <ul className="flex w-full h-full bg-red-950 text-white py-8 rounded-b-3xl mt-4">
          <li className="w-1/2 text-[18px] space-y-[2px] ">
            <img className="w-8 mx-auto" src={telegram} alt="" />
            <p>
              <a href="">Email</a>
            </p>
            <p>
              <a href="telegram.com">telegram@gmail.com</a>
            </p>
          </li>
          <li className="w-1/2 text-[18px] space-y-[2px]">
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
          src={hamburgerWhite}
          onMouseOver={(e) => (e.currentTarget.src = hamburgerBlack)}
          onMouseOut={(e) => (e.currentTarget.src = hamburgerWhite)}
          alt="x"
          onClick={() => setShowMenu(!showMenu)}
          className="relative w-8 h-6 mt-2 z-40 text-black md:hidden"
        />
      </span>
      {menu}
    </>
  );
}

export default Dropdown;
