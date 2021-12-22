import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../../pages/Main";
import Register from "../../pages/Register";
import Share from "../../pages/Share";
import Aside from "./Aside";

const Home = () => {
  return (
    <div className="Container">
      <Aside />
      <div className="Main">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/share" component={Share} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </div>
  );
};

export default Home;
