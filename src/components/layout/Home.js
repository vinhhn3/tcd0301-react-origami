import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../../pages/Login";
import Main from "../../pages/Main";
import NotFound from "../../pages/NotFound";
import Profile from "../../pages/Profile";
import Register from "../../pages/Register";
import Share from "../../pages/Share";
import Aside from "./Aside";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="Container">
      <Aside />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/share" component={Share} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login">
          {isLoggedIn ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/profile" component={Profile} />
        <Route path="" component={NotFound} />
      </Switch>
    </div>
  );
};

export default Home;
