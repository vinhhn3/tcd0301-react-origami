import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../pages/Login";
import Main from "../../pages/Main";
import NotFound from "../../pages/NotFound";
import Profile from "../../pages/Profile";
import Register from "../../pages/Register";
import Share from "../../pages/Share";
import Aside from "./Aside";

const Home = () => {
  return (
    <div className="Container">
      <Aside />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/share" component={Share} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route path="" component={NotFound} />
      </Switch>
    </div>
  );
};

export default Home;
