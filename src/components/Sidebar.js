import React from "react";
import { Link } from "react-router-dom";
import {
  MdHome,
  MdVideoLibrary,
  MdHistory,
  MdTrendingUp,
  MdLibraryMusic,
  MdLocalMovies,
  MdNewspaper,
} from "react-icons/md";
//react redux
import { useSelector } from "react-redux";

const Sidebar = () => {
  //const Subscriptions = ["Prime", "Library", "History", "Trending", "Shopping"];
  const isMenuOpen = useSelector((store) => store.Menu.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className=" sm:block w-auto sm:w-62  text-lg bg-white  h-auto p-2 ">
      {/* shadow-md shadow-gray-500 */}
      <Link to={"/"}>
        <div className="flex flex-row p-2  hover:bg-slate-100 hover:rounded-xl">
          <MdHome className="h-[40px] w-[30px]" />
          <h1 className="hidden sm:block px-2 py-1 font-normal">Home</h1>
        </div>
      </Link>
      <div className="flex flex-row p-3 px-2 hover:bg-slate-100 hover:rounded-xl">
        <img
          src="https://th.bing.com/th/id/OIP.B9oD3tJuAQVtdLB7DKh_BgAAAA?pid=ImgDet&rs=1"
          alt="shorts"
          className="h-[25px] w-[30px]"
        />
        <h1 className="px-2 font-normal hidden sm:block">Shorts</h1>
      </div>
      <div className="flex flex-row p-3 px-2 hover:bg-slate-100 hover:rounded-xl">
        <img
          src="https://cdn.onlinewebfonts.com/svg/img_3097.png"
          alt="Subscription"
          className="h-[25px] w-[30px]"
        />
        <h1 className="px-2 font-normal pr-8 hidden sm:block">Subscription</h1>
      </div>

      <div className="border border-b-1 border-gray-400 mx-0 3-3 my-2"></div>
      {/* <ul>
        {Subscriptions.map((items) => {
          return <li className="p-2 font-bold">{items}</li>;
        })}
      </ul> */}
      <div className="flex flex-row p-2 py-3 hover:bg-slate-100 hover:rounded-xl">
        <MdVideoLibrary className="h-[40px] w-[30px]" />
        <h1 className="px-2 py-1 font-normal hidden sm:block">Library</h1>
      </div>
      <div className="flex flex-row p-2 hover:bg-slate-100 hover:rounded-xl">
        <MdHistory className="h-[40px] w-[30px]" />
        <h1 className="px-2 py-1 font-normal hidden sm:block">History</h1>
      </div>
      <div className="border border-b-1 border-gray-400 mx-0 3-3 my-2 "></div>
      <h1 className="p-3 font-semibold text-xl hidden sm:block">Explore</h1>
      <div className="flex flex-row p-2 hover:bg-slate-100 hover:rounded-xl">
        <MdTrendingUp className="h-[40px] w-[30px]" />
        <h1 className="px-2 py-1 font-normal hidden sm:block">Trending</h1>
      </div>
      <div className="flex flex-row p-2 hover:bg-slate-100 hover:rounded-xl">
        <MdLibraryMusic className="h-[40px] w-[30px]" />
        <h1 className="px-2 py-1 font-normal hidden sm:block">Music</h1>
      </div>
      <div className="flex flex-row p-2 hover:bg-slate-100 hover:rounded-xl">
        <MdLocalMovies className="h-[40px] w-[30px]" />
        <h1 className="px-2 py-1 font-normal hidden sm:block">Movies</h1>
      </div>
      <div className="flex flex-row p-2 hover:bg-slate-100 hover:rounded-xl">
        <MdNewspaper className="h-[40px] w-[30px]" />
        <h1 className="px-2 py-1 font-normal hidden sm:block">News</h1>
      </div>
    </div>
  );
};

export default Sidebar;
