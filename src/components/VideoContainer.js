import React, { useEffect, useState } from "react";
import { YApi } from "../config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [ytvideos, setYtVideos] = useState([]);

  useEffect(() => {
    getvideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getvideos = async () => {
    const data = await fetch(YApi);
    const jsondata = await data.json();

    setYtVideos(jsondata?.items);
  };

  return (
    <div className="flex flex-wrap m-3">
      {ytvideos?.map((videos) => (
        <Link to={"/watch?v=" + videos.id}>
          <VideoCard videoinfo={videos} key={videos.id} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
