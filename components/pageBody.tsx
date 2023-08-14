import SocialLinks from "./socialLinks";
import ShowcaseList from "./showcaseList";
import ShowcaseCards from "./showcaseCards";
import AboutUs from "./aboutUs";
import Bulb from "./images/bulb.png";
import Gears from "./images/gears.png";
import Rocket from "./images/rocket.png";

function pageBody() {
  return (
    <div className="w-full   bg-red-100 rounded-t-[48px] text-center text-[1em]    ">
      <div className="px-6 space-y-8 md:px-12 xl:w-[80%] xl:mx-auto ">
        <div className="h-full pb-16 pt-20 max-w-[420px] mx-auto  ">
          <h1 className="text-[1.6em] py-4 font-bold text-[#DD3C5F]">
            How can we help you?
          </h1>
          <p>
            It takes just a few steps to build and launch your new website.
            We’ll strive to make this process as easy as possible for you.
          </p>
        </div>
        <div className="md:grid md:grid-cols-3 gap-6">
          <div className="   mx-auto bg-red-200 rounded-3xl pt-10  ">
            <h1 className="text-[1.3em] py-4 font-bold text-[#DD3C5F]">
              Planning
            </h1>
            <p className=" max-w-[420px] mx-auto py-4 px-6 text-[1em]">
              We’ll organize all your ideas and goals into an outline, making
              sure we are on the same page.
            </p>
            <img className="w-20 h-[110px]  mx-auto mt-4" src={Bulb} alt="x" />
          </div>

          <div className="   mx-auto bg-red-200 rounded-3xl pt-10  ">
            <h1 className="text-[1.3em] py-4 font-bold text-[#DD3C5F]">
              Development
            </h1>
            <p className="max-w-[420px] mx-auto py-4 px-6 text-[1em]">
              Based on the project outline, we’ll select the best platform and
              tools to build your website.
            </p>
            <img
              className="w-[150px] h-[110px]  mx-auto mt-4"
              src={Gears}
              alt="x"
            />
          </div>
          <div className="   mx-auto bg-red-200 rounded-3xl pt-10  ">
            <h1 className="text-[1.3em] py-4 font-bold text-[#DD3C5F]">
              Launch
            </h1>
            <p className="max-w-[420px] mx-auto py-4 px-6 text-[1em]">
              When everything is ready, we’ll launch your website and help you
              maintain it as needed.
            </p>
            <img
              className="w-20 h-[110px]   mx-auto mt-4"
              src={Rocket}
              alt="x"
            />
          </div>
        </div>

        <SocialLinks />
        <ShowcaseList />
        <ShowcaseCards />
      </div>

      <AboutUs />
    </div>
  );
}

export default pageBody;
