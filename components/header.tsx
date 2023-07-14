import Dropdown from "./dropdown";

const navigation = ["our process", "our work", "about us"];
const listItems = navigation.map((item) => (
  <li
    key="{item}{item}"
    className="hover:bg-red-600 hover:text-white py-2 px-4 rounded-full h-[90%] text-center duration-500 ease-in-out"
  >
    <a href="">{item}</a>
  </li>
));
function Header() {
  return (
    <>
      <div className="text-white hover:text-black bg-gray-600  hover:bg-white relative  h-fill py-2 justify-between   px-4 mt-4 flex   duration-500 w-[90%] mx-auto rounded-full   bg-opacity-75  font-['kanit']  font-light  ">
        <h1 className=" z-40   text-[30px] md:text-[28px] font-semibold pl-2  tracking-wider">
          CINZA
        </h1>

        <ul className="hidden md:flex    items-center gap-7 text-[14px] ">
          {listItems}
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
