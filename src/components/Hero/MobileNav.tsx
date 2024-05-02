import { FaAdjust } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

export default function MobileNav() {
  return (
    <nav className="relative z-50 w-full" id="home">
      <div className="mx-auto flex h-16 items-center  justify-between px-4 md:px-8">
        <div className="flex items-center text-2xl font-bold text-white">
          <FaAdjust />
          <div className=" font-philosopher">EdTechF</div>
        </div>
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
