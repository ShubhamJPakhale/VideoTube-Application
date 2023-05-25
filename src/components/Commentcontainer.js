import React from "react";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Shubham Pakhale",
    comment: "Good Video",
    replies: [
      {
        name: "Shubham Pakhale",
        comment: "Good Video",
      },
      {
        name: "Shubham Pakhale",
        comment: "Good Video",
        replies: [
          {
            name: "Shubham Pakhale",
            comment: "Good Video",
          },
          {
            name: "Shubham Pakhale",
            comment: "Good Video",
            replies: [
              {
                name: "Shubham Pakhale",
                comment: "Good Video",
              },
              {
                name: "Shubham Pakhale",
                comment: "Good Video",
              },
              {
                name: "Shubham Pakhale",
                comment: "Good Video",
              },
            ],
          },
          {
            name: "Shubham Pakhale",
            comment: "Good Video",
          },
        ],
      },
      {
        name: "Shubham Pakhale",
        comment: "Good Video",
      },
      {
        name: "Shubham Pakhale",
        comment: "Good Video",
      },
      {
        name: "Shubham Pakhale",
        comment: "Good Video",
      },
    ],
  },
  {
    name: "Shubham Pakhale",
    comment: "Good Video",
    replies: [
      {
        name: "Shubham Pakhale",
        comment: "Good Video",
      },
      {
        name: "Shubham Pakhale",
        comment: "Good Video",
      },
      {
        name: "Shubham Pakhale",
        comment: "Good Video",
      },
    ],
  },
  {
    name: "Shubham Pakhale",
    comment: "Good Video",
    replies: [
      {
        name: "Shubham Pakhale",
        comment: "Good Video",
      },
      {
        name: "Shubham Pakhale",
        comment: "Good Video",
      },
      {
        name: "Shubham Pakhale",
        comment: "Good Video",
      },
    ],
  },
];

const Commentcontainer = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Comments </h1>
      {console.log(commentsData)}
      <CommentsList clist={commentsData} />
    </div>
  );
};

export default Commentcontainer;
