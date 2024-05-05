import { FaFacebook } from "react-icons/fa";
import { SiAdobe, SiBehance, SiDribbble, SiLinux } from "react-icons/si";

export default function Companies() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-12 px-4 md:py-20">
      <div className="flex flex-wrap items-center justify-center gap-1 text-center">
        <span className="text-gray-600">We support over</span>
        <span className="text-gray-800">
          200+ leading universities and companies
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10">
        <div className="flex items-center gap-1 text-2xl font-bol text-gray-500">
          <SiAdobe />
          <div>Adobe</div>
        </div>
        <div className="flex items-center gap-1 text-2xl font-bold text-gray-500">
          <SiLinux />
          <div>Linux</div>
        </div>
        <div className="flex items-center gap-1 text-2xl font-bold text-gray-500">
          <SiBehance />
          <div>Behance</div>
        </div>
        <div className="flex items-center gap-1 text-2xl font-bold text-gray-500">
          <SiDribbble />
          <div>Dribble</div>
        </div>
        <div className="flex items-center gap-1 text-2xl font-bold text-gray-500">
          <FaFacebook />
          <div>Facebook</div>
        </div>
      </div>
    </div>
  );
}
