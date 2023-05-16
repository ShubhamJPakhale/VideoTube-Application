import React from "react";
import ButtonSort from "./ButtonSort";

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
  return (
    <div className="flex flex-row ">
      {buttonlist.map((item, index) => {
        return <ButtonSort name={item} key={index} />;
      })}
    </div>
  );
};

export default ButtonList;
