import Logo from "@iconscout/react-unicons/icons/uil-adjust";
import Copy from "@iconscout/react-unicons/icons/uil-copyright";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Linkeding from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center gap-4 bg-main-100 px-4 py-4 md:px-0">
      <div className="row-span-3 grid grid-cols-2 gap-8 pb-10 md:grid-cols-9 md:pl-10 lg:pl-28  [&>*]:flex [&>*]:flex-col [&>*]:gap-2">
        <div className=" col-span-2 row-span-1 pr-7 md:col-span-3">
          <div className="flex items-center gap-2">
            <div>
              <Logo size="36" color="white" />
            </div>
            <div className="font-philosopher text-3xl font-bold text-white">
              EdTech
            </div>
          </div>
          <div className="pt-4 text-gray-300">
            EdTech is a global online learning platform that offers anyour,
            anywhere access to online coureses
          </div>
        </div>
        <div className="col-span-1 row-span-2 pl-8 text-gray-300 md:col-span-2">
          <div className="pb-3 font-semibold !text-white">Pages</div>
          <div>Home</div>
          <div>Courses</div>
          <div>Events</div>
          <div>Authors</div>
          <div>About Us</div>
          <div>Tech on EdTech</div>
        </div>
        <div className="col-span-1 row-span-1 text-gray-300 md:col-span-2">
          <div className="pb-3 font-semibold !text-white">company</div>
          <div>Terms Condition</div>
          <div>Privacy Policy</div>
          <div>Cookies</div>
        </div>
        <div className="col-span-1 row-span-1 text-gray-300">
          <div className=" pb-3 font-semibold !text-white">Community</div>
          <div>Help</div>
          <div>FAQ</div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col items-center justify-between gap-4 py-3 md:flex-row md:px-28">
        <div className="flex gap-1 text-gray-200">
          <span>
            <Copy />
          </span>
          <span>EdTech. All rights reserved</span>
        </div>
        <div className="flex gap-6 text-gray-200">
          <Facebook />
          <Instagram />
          <Twitter />
          <Linkeding />
        </div>
      </div>
    </div>
  );
}
