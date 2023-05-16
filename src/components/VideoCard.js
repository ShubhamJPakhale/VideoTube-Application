import React from "react";

const VideoCard = ({ videoinfo }) => {
  //console.log(videoinfo);
  //const { statistics } = { videoinfo };
  //   const { title, thumbnails } = snippet;
  return (
    <div className="flex flex-col h-auto w-[350px] p-2 m-2 shadow shadow-gray-100 hover:shadow-slate-300">
      <img
        className="rounded-xl m-1 h-52"
        src={videoinfo?.snippet?.thumbnails?.high?.url}
        alt="video"
      />
      <div>
        <h1 className="text-lg font-semibold px-2 pt-2">
          {videoinfo?.snippet?.title}
        </h1>
        <h2 className="text-base font-normal px-2 ">
          {videoinfo?.snippet?.channelTitle}
        </h2>
        <h2 className="text-base font-normal px-2 ">
          {Math.round((videoinfo?.statistics?.viewCount / 100000) * 10) / 10} M
        </h2>
      </div>
    </div>
  );
};

export default VideoCard;
