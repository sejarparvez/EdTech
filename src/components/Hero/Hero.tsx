import { FaSearch } from "react-icons/fa";
import HeroImg from "../../image/hero.jpg";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Hero: React.FC = () => (
  <div className="flex flex-col gap-6 bg-main-100 md:flex-row md:gap-0">
    {/* HEADER */}
    <div className="hidden md:block">
      <Navbar />
    </div>
    <div className="md:hidden">
      <MobileNav />
    </div>
    {/* LEFT SIDE */}
    <div className="mt-8 pl-4 pr-4 md:mt-40 md:w-[62.5%] md:pr-16 lg:pl-24">
      <div className="flex flex-col gap-10 md:gap-16">
        {/* Main content */}
        <div className="flex flex-col gap-6">
          <div className="font-philosopher text-5xl text-white lg:text-7xl">
            Receive the help you need
          </div>
          <div className="text-lg text-gray-300">
            Access the greatest courses from top specialists to learn practical
            lessons in various topics.
          </div>
        </div>
        {/* Search input and popular topics */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex w-full items-center justify-between gap-2 rounded-full bg-slate-200 px-3 md:h-20 md:pl-6">
              <input
                type="text"
                className="h-12 w-full rounded-full bg-slate-200 outline-none md:h-16 md:w-8/12"
                placeholder="Search course, event, or author"
              />
              <div className="flex items-center gap-2 md:gap-5">
                <div className="h-10 w-0.5 bg-gray-300"></div>
                <div className="flex items-center gap-1 md:gap-5">
                  <div className="flex">
                    <select name="cars">
                      <option value="">Courses</option>
                      <option value="saab">Graphic</option>
                      <option value="opel">Animation</option>
                      <option value="audi">FrontEnd</option>
                    </select>
                  </div>
                  <div>
                    <div className="flex  h-10 w-10 items-center justify-center rounded-full bg-main-400 md:h-16 md:w-16">
                      <FaSearch />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-gray-300">
            Popular: UI Design, UX Research, Android, C++
          </div>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="col-span-4  md:w-[38.5%]">
      <img
        src={HeroImg}
        alt=""
        className="h-[30rem] w-full object-cover md:h-[40rem]"
      />
    </div>
  </div>
);

export default Hero;
