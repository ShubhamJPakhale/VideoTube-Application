import React from "react";
import { useSelector } from "react-redux";

import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
//import { useRef } from "react";

const buttonlist = [
  "All",
  "Music",
  "Live",
  "News",
  "Scene",
  "Gaming",
  "Mantras",
  "Games Shows",
  "Cars",
  "Conversation",
  "Recently Uploaded",
  "Trending",
  "React.js",
];
const ButtonList = () => {
  const buttonlistvisible = useSelector(
    (state) => state.Menu.isButtonListVisible
  );

  //const ref = useRef(null);
  const scroll = (scrollOffset) => {
    // ref.current.scrollLeft += scrollOffset;
    var slider = document.getElementById("slider");
    slider.scrollLeft += scrollOffset;
  };

  if (buttonlistvisible === false) return null;
  return (
    // <div className="flex overflow-x-scroll">
    //   {buttonlist.map((item, index) => {
    //     return <ButtonSort name={item} key={index} />;
    //   })}
    // </div> max-w-screen-2xl
    <div className="relative max-w-[300px] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg   overflow-hidden   mt-3 m-auto rounded-lg ">
      <div className="absolute bg-white pl-2  top-0  flex items-center">
        <TfiArrowCircleLeft
          onClick={() => scroll(-200)}
          className="my-4 cursor-pointer rounded-full hover:bg-gray-100 select-none h-[25px] w-[35px]"
        />
      </div>

      <ul
        id="slider"
        className="flex pl-10 pr-10 gap-4  m-2 overflow-x-scroll scrollbar-hide scroll-smooth"
      >
        {buttonlist.map((item, index) => {
          return (
            <li
              className="text-white select-none bg-gray-700 text-bold m-0 p-2 rounded-md  whitespace-nowrap "
              key={index}
            >
              {item}
            </li>
          );
        })}
      </ul>

      <div className="absolute pr-2 bottom-0 right-0 bg-white flex items-center">
        <TfiArrowCircleRight
          onClick={() => scroll(200)}
          className="my-4 rounded-full hover:bg-gray-100 select-none cursor-pointer h-[25px] w-[35px]"
        />
      </div>
    </div>
  );
};

export default ButtonList;
