import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
function footer() {
  return (
    <div className="  w-[100%] h-full  relative  mx-auto text-[1.1em] space-y-6 pt-16    gradients text-pink-200">
      <h1 className="text-[1.6em] py-4 font-bold w-[200px] sm:w-full mx-auto text-center text-white">
        Ready?
      </h1>

      <div className="md:flex  grid justify-center text-[0.9em]   py-6">
        <p className="sm:w-[450px] md:w-[250px]  text-[1.2em] mx-auto md:mx-0  pb-4 md:pt-4 md:pr-4 text-center">
          Tell us your ideas
        </p>
        <div className="flex pb-4 w-[250px] md:pr-6  mx-auto md:mx-0">
          <FontAwesomeIcon icon={faTelegram} className="w-14 h-14" />
          <div className="pl-2">
            <p>Email</p>
            <a href="#">hello@gmail.com</a>
          </div>
        </div>
        <div className="flex mx-auto w-[250px] md:mx-0 ">
          <FontAwesomeIcon icon={faInstagram} className="w-14 h-14" />
          <div className="pl-2">
            <p>Instagram</p>
            <a href="#">@placeholder</a>
          </div>
        </div>
      </div>
      <img src="x" alt="" className="w-[300px] h-[300px] mx-auto " />
    </div>
  );
}
export default footer;
