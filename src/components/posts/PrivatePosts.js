import React, { useContext } from "react";
import OrigamiContext from "../../context/origami/origamiContext";
import Post from "./Post";

const PrivatePosts = () => {
  const origamiContext = useContext(OrigamiContext);
  const { isLoading, privatePosts } = origamiContext;
  return (
    <>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="Posts">
          {privatePosts
            .slice(-3)
            .reverse()
            .map((post) => (
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

export default PrivatePosts;
