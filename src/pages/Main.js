import React, { useState } from "react";
import Post from "../components/posts/Post";
import Aside from "./Aside";

const Main = () => {
  const [posts, setPost] = useState([
    {
      id: 1,
      description: "Desc 1",
      author: "author 1",
    },
    {
      id: 2,
      description: "Desc 2",
      author: "author 2",
    },
    {
      id: 3,
      description: "Desc 3",
      author: "author 3",
    },
  ]);
  return (
    <div className="Container">
      <Aside />
      <div className="Main">
        <div className="Posts">
          {posts.map((post) => (
            <Post
              key={post.id}
              description={post.description}
              author={post.author}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
