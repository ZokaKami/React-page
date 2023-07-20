import SocialLinks from "./socialLinks";
import ShowcaseList from "./showcaseList";
import ShowcaseCards from "./showcaseCards";
function pageBody() {
  return (
    <div className="w-full bg-red-100 rounded-t-[48px] text-center text-[1em] px-6 space-y-8">
      <div className="h-full pb-16 pt-20 max-w-[420px] mx-auto">
        <h1 className="text-[1.6em] py-4 font-bold">How can we help you?</h1>
        <p>
          It takes just a few steps to build and launch your new website. We’ll
          strive to make this process as easy as possible for you.
        </p>
      </div>
      <div className="   mx-auto bg-red-200 rounded-3xl pt-10  ">
        <h1 className="text-[1.3em] py-4 font-bold">Planning</h1>
        <p className="max-w-[420px] mx-auto py-4 text-[1em]">
          We’ll organize all your ideas and goals into an outline, making sure
          we are on the same page.
        </p>
        <img className="w-20 h-[110px] bg-black mx-auto mt-4" src="x" alt="x" />
      </div>

      <div className="   mx-auto bg-red-200 rounded-3xl pt-10  ">
        <h1 className="text-[1.3em] py-4 font-bold">Development</h1>
        <p className="max-w-[420px] mx-auto py-4 text-[1em]">
          Based on the project outline, we’ll select the best platform and tools
          to build your website.
        </p>
        <img className="w-20 h-[110px] bg-black mx-auto mt-4" src="x" alt="x" />
      </div>
      <div className="   mx-auto bg-red-200 rounded-3xl pt-10  ">
        <h1 className="text-[1.3em] py-4 font-bold">Launch</h1>
        <p className="max-w-[420px] mx-auto py-4 text-[1em]">
          When everything is ready, we’ll launch your website and help you
          maintain it as needed.
        </p>
        <img className="w-20 h-[110px] bg-black mx-auto mt-4" src="x" alt="x" />
      </div>
      <SocialLinks />
      <ShowcaseList />
      <ShowcaseCards />
      <div className="h-full pb-16 pt-16 max-w-[420px] mx-auto">
        <h1 className="text-[1.6em] py-4 font-bold">WordPress plugins</h1>
        <p>
          We developed two of our most used WordPress plugins. Because they are
          very lightweight and offer great flexibility, they’re ideal for a
          variety of projects. They are currently active on more than 80
          websites.
        </p>
      </div>
    </div>
  );
}

export default pageBody;
