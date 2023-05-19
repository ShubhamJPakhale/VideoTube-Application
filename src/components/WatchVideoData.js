import React, { useEffect, useState } from "react";
import { YouTube_API_Key } from "../config";
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
        YouTube_API_Key
    );

    const jsonvideodata = await videodata.json();
    console.log(jsonvideodata);
    setVideodata(jsonvideodata.items[0]);
  };

  return (
    <div>
      <h1 className="text-xl font-semibold pt-3 text-wrap ">
        {videodata?.snippet?.title}
      </h1>
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
}

export default WatchVideoData;
