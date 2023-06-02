import Adjust from "@iconscout/react-unicons/icons/uil-adjust";
import MobileMenu from "./MobileMenu";

export default function MobileNav() {
  return (
    <nav className="relative z-50 w-full" id="home">
      <div className="mx-auto flex h-16 items-center  justify-between px-4 md:px-8">
        <div className="flex items-center text-2xl font-bold text-white">
          <Adjust size={32} />
          <div className=" font-philosopher">EdTech</div>
        </div>
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
