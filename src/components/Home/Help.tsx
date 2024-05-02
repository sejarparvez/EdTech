import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Img from "../../image/img1.jpeg";

export default function Help() {
  const [isTextVisible, setTextVisible] = useState(true);
  const [isTextVisible1, setTextVisible1] = useState(false);
  const [isTextVisible2, setTextVisible2] = useState(false);

  const toggleTextVisibility = () => {
    setTextVisible(!isTextVisible);
  };
  const toggleTextVisibility1 = () => {
    setTextVisible1(!isTextVisible1);
  };
  const toggleTextVisibility2 = () => {
    setTextVisible2(!isTextVisible2);
  };

  return (
    <div className=" bg-main-100 px-4 pt-16 pb-16 lg:px-24 lg:pb-32 lg:pt-24">
      <div className="grid-cols-12 md:grid">
        <div className="col-span-7 flex flex-col gap-3">
          <div>
            <div className="h-0.5 w-10 bg-[#24d6aa]"></div>
            <div className="text-[#24d6aa]">How to Begin</div>
          </div>
          <div className="font-philosopher text-4xl text-white lg:text-5xl">
            Get the help you need to ace your classes
          </div>
          <div className="pt-2 text-gray-300">
            We provide a wealth of materials for devoloping your first course.
            In addition, our teacher dashboard and curriculum pages help you
            stay organized
          </div>
        </div>
        <div className=" col-span-5 mt-10 flex justify-center md:mt-0 md:items-end md:justify-end md:pr-7">
          <button className=" rounded-full bg-[#24d6aa] px-8 py-4 font-bold text-white">
            Start now for free
          </button>
        </div>
      </div>
      {/* 2nd */}
      <div className="grid-cols-2 pt-12 md:grid">
        <div className="col-span-1">
          <img
            src={Img}
            alt=""
            className="w-full rounded-2xl object-cover  md:h-80 md:rounded-3xl"
          />
        </div>
        <div className="col-span-1 mt-10 flex flex-col gap-6 md:mt-0 md:pl-14">
          <div className="flex items-start justify-between text-xl text-gray-200 md:items-center md:text-2xl">
            <div className=" font-philosopher">Class Lectures and Teacher</div>
            <button onClick={toggleTextVisibility} className="px-3 py-2">
              {isTextVisible ? (
                <span>
                  <FaMinus />
                </span>
              ) : (
                <span>
                  <FaPlus />
                </span>
              )}
            </button>
          </div>
          {isTextVisible && (
            <div className="-mt-2 text-gray-400">
              you begain with your enthusiasm and knowleged. Then, using our
              Marketplace insights tool, select a promising topic. It is
              entirely up to you how you teach and what you bring to the table.
              WE provide a wealth of materials for developing your first course.
              In addition our teacher dashboard and curriculum pages help you
              stay organized
            </div>
          )}

          <div className="h-0.5 w-full bg-gray-400"></div>
          <div className="flex items-start justify-between text-xl text-gray-200 md:items-center md:text-2xl">
            <div className="font-philosopher">Midterm and Final Practice</div>
            <button onClick={toggleTextVisibility1} className="px-3 py-2">
              {isTextVisible1 ? (
                <span>
                  <FaMinus />
                </span>
              ) : (
                <span>
                  <FaPlus />
                </span>
              )}
            </button>
          </div>
          {isTextVisible1 && (
            <div className="-mt-2 text-gray-400">
              you begain with your enthusiasm and knowleged. Then, using our
              Marketplace insights tool, select a promising topic. It is
              entirely up to you how you teach and what you bring to the table.
              WE provide a wealth of materials for developing your first course.
              In addition our teacher dashboard and curriculum pages help you
              stay organized
            </div>
          )}
          <div className="h-0.5 w-full bg-gray-400"></div>
          <div className="flex items-start justify-between text-xl text-gray-200 md:items-center md:text-2xl">
            <div className="font-philosopher">Personalize Notes</div>
            <button onClick={toggleTextVisibility2} className="px-3 py-2">
              {isTextVisible2 ? (
                <span>
                  <FaMinus />
                </span>
              ) : (
                <span>
                  <FaPlus />
                </span>
              )}
            </button>
          </div>
          {isTextVisible2 && (
            <div className="-mt-2 text-gray-400">
              you begain with your enthusiasm and knowleged. Then, using our
              Marketplace insights tool, select a promising topic. It is
              entirely up to you how you teach and what you bring to the table.
              WE provide a wealth of materials for developing your first course.
              In addition our teacher dashboard and curriculum pages help you
              stay organized
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
