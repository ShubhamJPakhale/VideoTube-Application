import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeHambergerMenu } from "../utils/MenuSlice";
import { useSearchParams } from "react-router-dom";

import WatchVideoData from "./WatchVideoData";

const WatchVideo = () => {
  //const [value] = useState("value");

  const [searchParams] = useSearchParams();
  const term = searchParams.get("v");

  //console.log(term);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeHambergerMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
      <WatchVideoData videoid={term} />
    </div>
  );
};

export default WatchVideo;
