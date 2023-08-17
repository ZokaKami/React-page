import { useState, useEffect } from "react";

import hamburgerWhite from "./images/hamburgerWhite.png";
import hamburgerBlack from "./images/hamburgerBlack.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Dropdown() {
  const [showMenu, setShowMenu] = useState(false);
  const navigation = ["our process", "our work", "about us"];
  const listItems = navigation.map((item) => (
    <li key="{item}" className="p-[10px]">
      <a href="">{item}</a>
    </li>
  ));

  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setShowMenu(false);
    } else if (prevScrollPos > currentScrollPos) {
      setShowMenu(false);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  let menu;
  if (showMenu) {
    menu = (
      <nav
        className={`md:hidden  duration-300 absolute top-7 left-0 right-0 text-black   h-auto  w-[100%] mx-auto  bg-white text-center pt-6 z-20  font-['kanit'] text-[24px] rounded-b-3xl  `}
      >
        <ul>{listItems}</ul>

        <button className="px-[20px] py-[8px] mt-2 rounded-3xl bg-black text-white    flex mx-auto gap-1 ">
          contact{" "}
          <FontAwesomeIcon icon={faMessage} className="w-4 h-4 mt-2 ml-1" />
        </button>

        <ul className="flex w-full h-full bg-red-950 text-white py-8 rounded-b-3xl mt-4">
          <li className="w-1/2 text-[18px] space-y-[2px] ">
            <FontAwesomeIcon icon={faTelegram} className="w-12 h-12" />
            <p>
              <a href="">Email</a>
            </p>
            <p>
              <a href="telegram.com">telegram@gmail.com</a>
            </p>
          </li>
          <li className="w-1/2 text-[18px] space-y-[2px]">
            <FontAwesomeIcon icon={faInstagram} className="w-12 h-12" />
            <p>
              <a href="">Instagram</a>
            </p>
            <p>
              <a href="telegram.com">instaName</a>
            </p>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <>
      <span onClick={() => setShowMenu(!showMenu)}>
        {" "}
        <img
          src={hamburgerWhite}
          onMouseOver={(e) => (e.currentTarget.src = hamburgerBlack)}
          onClick={(e) => (e.currentTarget.src = hamburgerBlack)}
          onMouseOut={(e) => (e.currentTarget.src = hamburgerWhite)}
          alt="x"
          className="relative w-8 h-6 mt-2 z-40 text-black md:hidden"
        />
      </span>
      {menu}
    </>
  );
}

export default Dropdown;
