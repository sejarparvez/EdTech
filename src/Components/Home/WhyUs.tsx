import Calander from "@iconscout/react-unicons/icons/uil-calendar-alt";
import Chat from "@iconscout/react-unicons/icons/uil-chat";
import Notes from "@iconscout/react-unicons/icons/uil-notes";
import img2 from "../../img/img2.jpg";

export default function WhyUs() {
  return (
    <div className="mt-10 flex  grid-cols-2 flex-col-reverse gap-10 bg-main-300 p-4 md:mt-0 md:grid md:p-8 lg:p-28">
      <div className=" col-span-1 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div>
            <Chat size="40" />
          </div>
          <div className="font-philosopher text-3xl">Discussion 24/7</div>
          <div className="text-gray-600">
            The community is always there for you if you have difficult learning
            the Courses.
          </div>
          <hr />
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <Calander size="40" />
          </div>
          <div className="font-philosopher text-3xl">Schedule with Author</div>
          <div className="text-gray-600">
            Choose an order schedule to the author to get in-depth knowleged
            with 1 on 1 call.
          </div>
          <hr />
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <Notes size="40" />
          </div>
          <div className="font-philosopher text-3xl">Practice for free</div>
          <div className="text-gray-600">
            Test your skills with practice tesets that have been providing on
            our platform.
          </div>
        </div>
      </div>

      <div className=" col-span-1 flex flex-col gap-5">
        <div className="flex items-center gap-1">
          <div className="h-0.5 w-10 bg-main-400"></div>
          <div className="text-main-400">Why Us</div>
        </div>
        <div className="font-philosopher text-4xl md:text-5xl">
          Our special feature we build for you
        </div>
        <div className="text-gray-500">
          EdTech is a platform that helps students in advencing their career by
          providing solutions for simple and flexible online learning. Allowing
          you to study anywhere and anytime at affordable prices.
        </div>
        <div className="mt-10">
          <img
            src={img2}
            alt=""
            className="h-60 w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
