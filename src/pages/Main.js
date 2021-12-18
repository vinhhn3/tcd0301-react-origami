import React from "react";
import Aside from "./Aside";

const Main = () => {
  return (
    <div className="Container">
      <Aside />
      <div className="Main">
        <h1>This is Main content</h1>
      </div>
    </div>
  );
};

export default Main;
