import React from "react";
import { toggleMenu } from "../utils/MenuSlice";
import logo from "../videotube.png";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="bg-white shadow-md shadow-gray-100 flex justify-between">
      <div className="flex justify-between">
        <img
          onClick={() => toggleMenuHandler()}
          alt="HambergerMenu"
          src="https://th.bing.com/th/id/R.71c81d7737250d0ae49fa6d31943ab64?rik=cttiv8FQYs3eGA&riu=http%3a%2f%2fskillsdnet.com%2fimages%2fhamburger-menu-512.png&ehk=CRidlq8uzAq%2fii5xGl0dPjEelT5VGmIBBcNnabijx%2bQ%3d&risl=&pid=ImgRaw&r=0"
          className="h-[55px] w-[50px] p-2 cursor-pointer"
        />
        <div className="hidden my-3  md:block">
          {/* text-lg font-semibold */}
          {/* Video<span className="text-red-500 ">Tube</span> */}
          <img src={logo} alt="Logo" className="h-[30px] w-[100px]" />
        </div>
      </div>
      <div>
        <input
          type="text"
          className="rounded-l-full rounded-bl-full w-[150px] sm:w-[300px] md:w-[350px] lg:w-[450px] xl:[600px] h-[32px] border-r-0 focus:border-gray-400 focus:outline-none   border border-gray-400 my-3 pl-3 pt-2 pb-2 "
          placeholder="Search Videos, Shorts "
        />
        <button className="bg-gray-200 text-Black-500 p-1 border border-gray-400 rounded-r-full rounded-br-full h-[32px]  ">
          {/* <img
            alt="Search"
            src="https://webstockreview.net/images/search-icon-png-9.png"
            className="h-7 pl-2 pr-2 "
          /> */}
          Search
        </button>
      </div>
      <div>
        <img
          alt="User"
          src="https://yt3.ggpht.com/a/AATXAJwmmdi72_pMDpjT-blDnWv-sAR5VWc_161MYA=s900-c-k-c0xffffffff-no-rj-mo"
          className="h-[50px] w-[50px] p-1 mr-4 pt-2"
        />
      </div>
    </div>
  );
};

export default Header;
