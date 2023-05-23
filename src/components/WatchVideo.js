import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeHambergerMenu } from "../utils/MenuSlice";
import { useSearchParams } from "react-router-dom";

import WatchVideoData from "./WatchVideoData";
import Comments from "./Comments";

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
    <div className="m-1 md:ml-12 md:my-5 flex flex-col w-auto lg:w-[760px]">
      <iframe
        src={"https://www.youtube.com/embed/" + term}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="md:w-[760px] md:h-[425px] w-full h-[300px]"
      ></iframe>

      <WatchVideoData videoid={term} />
      <Comments />
    </div>
  );
};

export default WatchVideo;
