import React from "react";
import birdLogo from "../../assets/blue-origami-bird.png";

const Post = ({ description, author }) => {
  return (
    <div className="Post">
      <img src={birdLogo} alt="logo" />
      <p className="description">count - {description}</p>
      <div>
        <span>
          <small>Author:</small>
          {author}
        </span>
      </div>
    </div>
  );
};

export default Post;
