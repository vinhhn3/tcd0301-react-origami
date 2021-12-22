import React from "react";
import Posts from "../components/posts/Posts";
import Aside from "./Aside";

const Main = () => {
  return (
    <div className="Container">
      <Aside />
      <div className="Main">
        <Posts />
      </div>
    </div>
  );
};

export default Main;
