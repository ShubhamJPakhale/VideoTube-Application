import React from "react";
import Comments from "./Comments";

const CommentsList = ({ clist }) => {
  return clist?.map((comments, index) => (
    <div>
      {console.log("list data" + clist)}
      <Comments key={index} cdata={comments} />
      <div className="ml-6 my-2">
        <CommentsList clist={comments.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
