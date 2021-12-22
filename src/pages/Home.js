import React from "react";
import { Route, Switch } from "react-router-dom";
import Aside from "./Aside";
import Main from "./Main";
import Share from "./Share";

const Home = () => {
  return (
    <div className="Container">
      <Aside />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/share" component={Share} />
      </Switch>
    </div>
  );
};

export default Home;
