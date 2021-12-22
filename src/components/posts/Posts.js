import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    setIsLoading(true);
    var response = await axios.get("http://localhost:9999/api/origami/all");
    setPosts(response.data);
    setIsLoading(false);
  }, []);
  return (
    <>
      <h1>Publications</h1>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="Posts">
          {posts.map((post) => (
            <Post
              key={post._id}
              description={post.description}
              author={post.author.username}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Posts;
