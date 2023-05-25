import React, { useEffect, useState } from "react";
import { hideButtonList, toggleMenu } from "../utils/MenuSlice";
import logo from "../videotube.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { VT_Search_suggestion_Api } from "../config";
import { MdSearch } from "react-icons/md";
import { cacheResults } from "../utils/SearchSlice";

const Header = () => {
  const [searchQuary, setSearchQuary] = useState("");
  const [suggestionvalues, setSuggestionvalues] = useState([]);
  //console.log(searchQuary);
  const dispatch = useDispatch();
  const searchcache = useSelector((state) => state.Search);

  const buttonlistvisible = useSelector(
    (state) => state.Menu.isButtonListVisible
  );

  useEffect(() => {
    //let timeout;
    const timeout = setTimeout(() => {
      if (searchcache[searchQuary]) {
        setSuggestionvalues(searchcache[searchQuary]);
        console.log("data already in cache!!");
      } else {
        getSearchSuggestion();
       
      }
    }, 200);

    return () => {
      clearTimeout(timeout);
      console.log("cleartimout called ");
    };
<<<<<<< Updated upstream
     // eslint-disable-next-line react-hooks/exhaustive-deps
=======
    // eslint-disable-next-line react-hooks/exhaustive-deps
>>>>>>> Stashed changes
  }, [searchQuary]);

  //debounce function
  const getSearchSuggestion = async () => {
    console.log("query = " + searchQuary);
    const suggestion = await fetch(VT_Search_suggestion_Api + searchQuary);
    const jsonsuggestion = await suggestion.json();
    setSuggestionvalues(jsonsuggestion[1]);

    dispatch(cacheResults({ [searchQuary]: jsonsuggestion[1] }));
    console.log("api for suggestion = " + searchQuary + suggestionvalues);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  // below dispatch for visibility of side bar in watch video card
  const handleButtonlist = () => {
    dispatch(hideButtonList());
  };

  // const onSearch = (e) => {
  //   setSearchQuary(e.target.value);
  //   console.log(searchQuary);
  // };

  return (
    <div className="bg-white shadow-md shadow-gray-100 max-w-full flex justify-between sm:justify-between sticky top-0 x-0 opacity-1">
      <div className="flex justify-start">
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
      <div className="justify-center">
        <div>
          <input
            type="text"
            className="rounded-l-full rounded-bl-full w-7/12 sm:w-[300px] md:w-[350px] lg:w-[450px] xl:w-[600px] h-[32px] border-r-0 focus:border-gray-400 focus:outline-none   border border-gray-400 my-3 pl-3 pt-2 pb-2 "
            placeholder="Search Videos, Shorts "
            value={searchQuary}
            onChange={(e) => setSearchQuary(e.target.value)}
            onFocus={() => handleButtonlist()}
            onBlur={() => handleButtonlist()}
          />
          <button className="bg-gray-200 text-Black-500 p-1 border border-gray-400 rounded-r-full rounded-br-full h-[32px] w-auto ">
            {/* <img
            alt="Search"
            src="https://webstockreview.net/images/search-icon-png-9.png"
            className="h-7 pl-2 pr-2 "
          /> */}{" "}
            Search
          </button>
        </div>
        {buttonlistvisible === false && (
          <div className=" absolute opacity-1 overflow-hidden bg-white py-2 px-5 text-base font-semibold shadow-sm shadow-gray-100 w-[150px] sm:w-[300px] md:w-[350px] lg:w-[450px] xl:w-[600px] ">
            <ul>
              {suggestionvalues.map((items, index) => (
                <li
                  key={index}
                  className="hover:bg-gray-100 py-1 flex flex-row text-wrap "
                  onClick={(e) =>
                    setSearchQuary(searchQuary[e.target.index - 1])
                  }
                >
                  <MdSearch className="h-[20px] w-[20px] mr-3 mt-1 ml-1" />{" "}
                  {items}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="float-right justify-end">
        <img
          alt="User"
          src="https://yt3.ggpht.com/a/AATXAJwmmdi72_pMDpjT-blDnWv-sAR5VWc_161MYA=s900-c-k-c0xffffffff-no-rj-mo"
          className="h-[50px] w-[50px] p-1 mr-4 pt-2 "
        />
      </div>
    </div>
  );
};

export default Header;
