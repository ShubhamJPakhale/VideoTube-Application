import React from "react";

const ButtonSort = ({ name }) => {
  return (
    <div>
      <button className="rounded-lg p-2 mx-2 my-4 bg-gray-100">{name}</button>
    </div>
  );
};

export default ButtonSort;
