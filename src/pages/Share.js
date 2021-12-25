import React, { useContext, useState } from "react";
import PrivatePosts from "../components/posts/PrivatePosts";
import OrigamiContext from "../context/origami/origamiContext";

const Share = () => {
  const origamiContext = useContext(OrigamiContext);
  const { createPost } = origamiContext;
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    createPost(text);
    setText("");
  };

  return (
    <div className="Input">
      <div>
        <h1>Share your thoughts ...</h1>
        <textarea onChange={onChange} value={text}></textarea>
        <button onClick={onClick}>Post</button>
      </div>
      <div>
        <h2>Last 3 posts on your wall</h2>
        <PrivatePosts />
      </div>
    </div>
  );
};

export default Share;
