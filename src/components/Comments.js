import React from "react";

const Comments = ({ cdata }) => {
  const { name, comment } = cdata;

  return (
    <div className="flex bg-slate-100 p-1 rounded-lg">
      <img
        alt="user"
        src="https://yt3.ggpht.com/a/AATXAJwmmdi72_pMDpjT-blDnWv-sAR5VWc_161MYA=s900-c-k-c0xffffffff-no-rj-mo"
        className="h-7 w-7 my-1"
      />
      <div className="px-3">
        <h2 className="text-sm font-bold">{name}</h2>
        <p className="text-xs ">{comment}</p>
      </div>
    </div>
  );
};

export default Comments;
