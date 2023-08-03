import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWordpress,
  faShopify,
  faJava,
  faUbuntu,
  faReact,
  faJediOrder,
} from "@fortawesome/free-brands-svg-icons";
function socialLinks() {
  return (
    <div className=" text-[1.1em] font-semibold  mx-auto bg-red-200 rounded-3xl py-10  ">
      <div className="pb-6 text-[#DD3C5F] text-[1.2em]">
        <p>Platforms and tools</p>
      </div>
      <div className="grid grid-cols-3 gap-4 md:flex md:justify-around md:px-12 md:py-4 place-items-center">
        <FontAwesomeIcon
          className="w-12 h-12"
          icon={faWordpress}
          style={{ color: "#a61a67" }}
        />

        <FontAwesomeIcon
          className="w-12 h-12"
          icon={faShopify}
          style={{ color: "#a61a67" }}
        />
        <FontAwesomeIcon
          className="w-12 h-12"
          icon={faJava}
          style={{ color: "#a61a67" }}
        />
        <FontAwesomeIcon
          className="w-12 h-12"
          icon={faUbuntu}
          style={{ color: "#a61a67" }}
        />
        <FontAwesomeIcon
          className="w-12 h-12"
          icon={faReact}
          style={{ color: "#a61a67" }}
        />
        <FontAwesomeIcon
          className="w-12 h-12"
          icon={faJediOrder}
          style={{ color: "#a61a67" }}
        />
      </div>
    </div>
  );
}

export default socialLinks;
