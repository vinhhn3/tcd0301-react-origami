import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../components/posts/Post";
import Aside from "./Aside";

const Main = () => {
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
    <div className="Container">
      <Aside />
      <div className="Main">
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
      </div>
    </div>
  );
};

export default Main;
