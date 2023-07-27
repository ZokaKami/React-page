import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
function footer() {
  return (
    <div className="  w-full h-full  relative  mx-auto text-[1.1em] space-y-6 pt-16    gradients text-pink-200">
      <h1 className="text-[1.6em] py-4 font-bold w-[200px] sm:w-full mx-auto text-center text-white">
        Ready?
      </h1>
      <p className="sm:w-[450px]  text-[1.3em] mx-auto text-center">
        Tell us your ideas
      </p>
      <div className="flex w-[300px] mx-auto">
        <FontAwesomeIcon icon={faTelegram} className="w-14 h-14" />
        <div className="pl-2">
          <p>Email</p>
          <p>hello@placeholder.com</p>
        </div>
      </div>
      <div className="flex w-[300px] mx-auto">
        <FontAwesomeIcon icon={faInstagram} className="w-14 h-14" />
        <div className="pl-2">
          <p>Instagram</p>
          <p>@placeholder</p>
        </div>
      </div>
      <img src="x" alt="" className="w-[300px] h-[300px] mx-auto " />
    </div>
  );
}
export default footer;
