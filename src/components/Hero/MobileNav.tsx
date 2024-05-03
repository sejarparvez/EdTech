import { FiSlack } from "react-icons/fi";
import MobileMenu from "./MobileMenu";

export default function MobileNav() {
  return (
    <nav className="relative z-50 w-full" id="home">
      <div className="mx-auto flex h-16 items-center  justify-between px-4 md:px-8">
        <div className="flex items-center gap-2 text-white">
          <FiSlack size="20" />
          <div className=" font-philosopher text-xl font-extrabold">EdTech</div>
        </div>
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
