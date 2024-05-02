import { FaAdjust } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="absolute hidden  h-16 w-full items-center justify-between px-4 md:flex md:h-28 lg:pr-20 lg:pl-24">
      {/* Logo and EdTech */}
      <div className="flex items-center gap-8 text-white lg:gap-28">
        <div className="flex items-center text-2xl font-bold">
          <FaAdjust />
          <div className=" font-philosopher">EdTech</div>
        </div>
        {/* Navigation links */}
        <div className="hidden gap-6 md:flex lg:gap-16">
          <select name="cars" className="bg-main-100">
            <option value="volvo">Browse</option>
            <option value="saab">Courses</option>
            <option value="opel">Teachers</option>
            <option value="audi">Students</option>
          </select>
          <span>Teach on Edtech</span>
          <span>About Us</span>
        </div>
      </div>
      {/* Buttons */}
      <div className="hidden items-center gap-5 md:flex lg:gap-16">
        <button className="text-blue rounded-full px-8 py-4 font-bold text-main-400 ring-2 ring-main-400">
          Sign In
        </button>
        <button className="rounded-full bg-main-400 px-8 py-4 font-bold text-white ring-2 ring-main-400">
          Sign Up
        </button>
      </div>
    </div>
  );
}
