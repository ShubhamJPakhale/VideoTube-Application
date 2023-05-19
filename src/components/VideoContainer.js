import React, { useEffect, useState } from "react";
import { Youtube_API } from "../config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [ytvideos, setYtVideos] = useState([]);

  useEffect(() => {
    getvideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getvideos = async () => {
    const data = await fetch(Youtube_API);
    const jsondata = await data.json();
    console.log(jsondata);
    setYtVideos(jsondata?.items);
  };

  return (
    <div className="flex flex-wrap m-4">
      {ytvideos.map((videos) => (
        <Link to={"/watch?v=" + videos.id}>
          <VideoCard videoinfo={videos} key={videos.id} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
