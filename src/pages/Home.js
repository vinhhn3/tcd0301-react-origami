import React from "react";
import { Route, Switch } from "react-router-dom";
import Aside from "./Aside";
import Main from "./Main";
import Register from "./Register";
import Share from "./Share";

const Home = () => {
  return (
    <div className="Container">
      <Aside />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/share" component={Share} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
};

export default Home;
