import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeHambergerMenu } from "../utils/MenuSlice";
import { useSearchParams } from "react-router-dom";
import { YouTube_API_Key } from "../config";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const WatchVideo = () => {
  const [videodata, setVideodata] = useState([]);
  const [searchParams] = useSearchParams();
  const term = searchParams.get("v");

  //console.log(term);

 const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeHambergerMenu());
  }, []);
  useEffect(() => {
    getvideodetails();
  }, []);

  const getvideodetails = async () => {
    const videodata = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        term +
        "&key=" +
        YouTube_API_Key
    );

    const jsonvideodata = await videodata.json();
    console.log(jsonvideodata);
    setVideodata(jsonvideodata.items[0]);
  };

  return (
    <div>
      <div className="ml-12 my-5 flex flex-col w-[760px]">
        <iframe
          width="760"
          height="425"
          src={"https://www.youtube.com/embed/" + term}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h1 className="text-xl font-semibold pt-3 text-wrap ">
          {videodata?.snippet?.title}
        </h1>
      </div>
      <div className="ml-12 w-auto flex flex-row justify-between">
        <h1 className="text-lg font-normal pt-1 text-wrap ">
          {videodata?.snippet?.channelTitle}
        </h1>{" "}
        <button className="rounded-full pl-3 pr-3 pt-1 pb-1 bg-black text-white w-auto">
          Subscribe
        </button>
        <div className="flex flex-row">
          <button className="p-2 ">
            <AiOutlineLike className="h-[20px] w-[20px]" />
            {Math.round((videodata?.statistics?.likeCount / 1000) * 10) /
              10}K{" "}
          </button>
          <button>
            <AiOutlineDislike />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
