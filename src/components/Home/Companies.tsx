import { FaAdjust } from "react-icons/fa";
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
        <div className="flex items-center gap-1">
          <SiAdobe />
          <div className="text-2xl font-bold text-gray-500">LogoipsumFS</div>
        </div>
        <div className="flex items-center gap-1">
          <SiLinux />
          <div className="text-2xl font-bold text-gray-500">LogoipsumS</div>
        </div>
        <div className="flex items-center gap-1">
          <SiBehance />
          <div className="text-2xl font-bold text-gray-500">LogoipsumS</div>
        </div>
        <div className="flex items-center gap-1">
          <SiDribbble />
          <div className="text-2xl font-bold text-gray-500">LogoipsumS</div>
        </div>
        <div className="flex items-center gap-1">
          <FaAdjust />
          <div className="text-2xl font-bold text-gray-500">LogoipsumA</div>
        </div>
      </div>
    </div>
  );
}
