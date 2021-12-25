import React, { useContext, useEffect } from "react";
import OrigamiContext from "../../context/origami/origamiContext";
import Post from "./Post";

const Posts = () => {
  const origamiContext = useContext(OrigamiContext);
  const { publicPosts, getPublicPosts, isLoading } = origamiContext;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    getPublicPosts();
  }, []);
  return (
    <>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="Posts">
          {publicPosts.map((post) => (
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
