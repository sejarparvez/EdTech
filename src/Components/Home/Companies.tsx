import Logo5 from "@iconscout/react-unicons/icons/uil-adjust-alt";
import Logo from "@iconscout/react-unicons/icons/uil-adobe";
import Logo3 from "@iconscout/react-unicons/icons/uil-behance";
import Logo4 from "@iconscout/react-unicons/icons/uil-dribbble";
import Logo2 from "@iconscout/react-unicons/icons/uil-linux";

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
          <Logo color="gray" />
          <div className="text-2xl font-bold text-gray-500">Logoipsum</div>
        </div>
        <div className="flex items-center gap-1">
          <Logo2 color="gray" />
          <div className="text-2xl font-bold text-gray-500">Logoipsum</div>
        </div>
        <div className="flex items-center gap-1">
          <Logo3 color="gray" />
          <div className="text-2xl font-bold text-gray-500">Logoipsum</div>
        </div>
        <div className="flex items-center gap-1">
          <Logo4 color="gray" />
          <div className="text-2xl font-bold text-gray-500">Logoipsum</div>
        </div>
        <div className="flex items-center gap-1">
          <Logo5 color="gray" />
          <div className="text-2xl font-bold text-gray-500">Logoipsum</div>
        </div>
      </div>
    </div>
  );
}
