import { FC, useState } from "react";
import Model from "./Model";
import TabData from "./TabData";

const Courses: FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);

    const container = document.querySelector(".image-container") as HTMLElement;

    if (container) {
      container.style.transform = "scale(0)";
      setTimeout(() => {
        container.style.transform = "scale(1)";
      }, 300);
    }
  };

  const dataToDisplay = TabData[activeTab].courses;
  return (
    <div className="flex flex-col gap-4 pb-20  pt-8 md:gap-10">
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="flex flex-col gap-2 px-4 md:w-2/4 lg:px-24">
          <div className="flex items-center gap-1">
            <span className="h-0.5 w-8 bg-main-400"></span>
            <span className="text-main-400">Popular Courses</span>
          </div>
          <div className="font-philosopher text-4xl lg:text-5xl">
            More Than 3,200 <br /> Courses To Choose From
          </div>
        </div>
        <div className="flex items-end px-4 text-xl text-gray-500 md:w-2/4 md:px-0">
          We provide a range of categories to help you choose courses that fit
          your expertise. More than 3.2K courses will guide you from basic
        </div>
      </div>
      <div className="relative flex flex-col px-4 pt-8 md:px-24">
        <div className="mt-6 flex flex-wrap gap-3 text-center font-bold text-gray-500 md:gap-8 [&>*]:px-3 [&>*]:py-1">
          {TabData.map((tab, index) => (
            <span
              key={index}
              className={`cursor-pointer  ${
                activeTab === index
                  ? "border-b-4 border-main-400 text-black"
                  : "border-b-4 border-main-300 lg:border-gray-400"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </span>
          ))}
        </div>
        <hr className="absolute bottom-0 -z-30 hidden h-1.5 w-10/12 bg-gray-400 lg:block"></hr>
      </div>
      <div className="image-container my-12 flex items-center justify-center px-0 duration-300 ease-in-out lg:px-6 ">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-4 lg:gap-10 ">
          {dataToDisplay.map((image, index) => (
            <div key={index} className=" duration-300 ease-in-out">
              <Model Title={image.Title} Name={image.Name} Url={image.Url} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="rounded-full px-6 py-2 font-bold text-main-400 ring-2 ring-main-400 transition-all duration-300 ease-in-out hover:bg-main-400  hover:text-white md:px-8 md:py-4">
          More Courses
        </button>
      </div>
    </div>
  );
};

export default Courses;
