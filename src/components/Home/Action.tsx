import { FaAdjust } from "react-icons/fa";
import { SiAdobe, SiBehance, SiDribbble, SiLinux } from "react-icons/si";

export default function Action() {
  return (
    <div className="flex flex-col items-center justify-center rounded-t-2xl bg-main-100 px-4 py-10 md:rounded-t-3xl lg:px-28 lg:py-20">
      <div className="text-center font-philosopher text-5xl text-white md:text-6xl lg:text-7xl">
        Ready to Start Your Courses <br /> and Grow Your Career
      </div>
      <div className="my-6 text-center text-xl text-gray-300">
        Experts teach you everything from the comport of your home. Improve your
        career today by <br />
        enrolling in excelent courses in affordeble prices.
      </div>
      <button className="my-10 rounded-full bg-[#24d6aa] px-12 py-4 font-bold">
        Get Started
      </button>
      <div className="mt-16 flex flex-wrap items-center justify-center gap-10 ">
        <div className="flex items-center gap-1 text-gray-300">
          <FaAdjust />
          <div className="text-2xl font-bold ">Logoipsum</div>
        </div>
        <div className="flex items-center gap-1  text-gray-300">
          <SiAdobe />
          <div className="text-2xl font-bold">Logoipsum</div>
        </div>
        <div className="flex items-center gap-1 text-gray-300">
          <SiBehance />
          <div className="text-2xl font-bold">Logoipsum</div>
        </div>
        <div className="flex items-center gap-1 text-gray-300">
          <SiDribbble />
          <div className="text-2xl font-bold ">Logoipsum</div>
        </div>
        <div className="flex items-center gap-1 text-gray-300">
          <SiLinux />
          <div className="text-2xl font-bold ">Logoipsum</div>
        </div>
      </div>
    </div>
  );
}
