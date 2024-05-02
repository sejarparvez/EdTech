import { useState } from "react";

export default function MobileMenu() {
  const [NavOpen, setNavOpen] = useState(false);

  const HandleClick = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <div className="lg:hidden">
      <div
        className={`z-40 flex flex-col gap-1 p-3 duration-300 ${
          NavOpen ? "rotate-[360deg]" : ""
        }`}
        onClick={HandleClick}
      >
        <span
          className={`h-0.5 w-6 bg-main-400 duration-300 ${
            NavOpen ? " translate-y-1.5 rotate-45 " : ""
          } `}
        ></span>
        <span
          className={`h-0.5 w-6 bg-main-400 duration-300  ${
            NavOpen ? "hidden" : ""
          } `}
        ></span>
        <span
          className={`h-0.5 w-6 bg-main-400 duration-300 ${
            NavOpen ? "-rotate-45 duration-300 ease-in-out" : ""
          } `}
        ></span>
      </div>
      <div
        className={`fixed top-0 right-0 -z-10 h-screen w-full transform  bg-black transition duration-300 ease-out dark:bg-black ${
          NavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mt-24 flex flex-col items-center gap-4 text-xl text-main-300 [&>*]:cursor-pointer ">
          <div className=" flex flex-col gap-4 hover:[&>*]:text-main-400">
            <select name="cars" className="bg-black">
              <option value="">Browse</option>
              <option value="saab" onClick={HandleClick}>
                Courses
              </option>
              <option value="opel" onClick={HandleClick}>
                Teachers
              </option>
              <option value="audi" onClick={HandleClick}>
                Students
              </option>
            </select>
            <span>Teach on Edtech</span>
            <span>About Us</span>
            <span>
              {/* Buttons */}
              <div className="mt-6 flex items-center gap-4">
                <button className="text-blue rounded-full px-4 py-1.5 font-bold text-main-400 ring-2 ring-main-400">
                  Sign In
                </button>
                <button className="rounded-full bg-main-400 px-4 py-1.5 font-bold text-white ring-2 ring-main-400">
                  Sign Up
                </button>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
