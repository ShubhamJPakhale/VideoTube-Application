import React, { useEffect, useState } from "react";
import { ykey } from "../config";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

function WatchVideoData({ videoid }) {
  const [videodata, setVideodata] = useState([]);
  useEffect(() => {
    getvideodetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getvideodetails = async () => {
    const videodata = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        videoid +
        "&key=" +
        ykey
    );

    const jsonvideodata = await videodata.json();

    setVideodata(jsonvideodata.items[0]);
  };

  return (
    <div>
      <h1 className="flex flex-row justify-between text-xl font-semibold pt-3 text-wrap ">
        {videodata?.snippet?.title}
      </h1>
      <div className="pt-2 w-auto flex flex-row justify-between">
        <h1 className="text-lg font-normal pt-1 text-wrap ">
          {videodata?.snippet?.channelTitle}
        </h1>{" "}
        <button className="rounded-full text-lg px-2   hover:bg-black  bg-gray-800 text-white ">
          Subscribe
        </button>
        <div className="flex flex-row border-2 border-gray-400 rounded-lg mr-5 ">
          <button className="p-2 flex flex-row pr-3 border-r-2 border-gray-400 hover:bg-slate-400">
            <AiOutlineLike className="h-[20px] w-[20px]" />
            {Math.round((videodata?.statistics?.likeCount / 1000) * 10) /
              10}K{" "}
          </button>
          <button className="px-4 pr-4 hover:bg-slate-400">
            <AiOutlineDislike />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WatchVideoData;
