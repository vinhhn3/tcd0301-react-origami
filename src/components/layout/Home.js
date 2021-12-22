import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import OrigamiContext from "../../context/origami/origamiContext";
import Login from "../../pages/Login";
import Main from "../../pages/Main";
import NotFound from "../../pages/NotFound";
import Profile from "../../pages/Profile";
import Register from "../../pages/Register";
import Share from "../../pages/Share";
import Aside from "./Aside";
const Home = () => {
  const origamiContext = useContext(OrigamiContext);
  const { isLoggedIn } = origamiContext;
  return (
    <div className="Container">
      <Aside />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/share">
          {!isLoggedIn ? <Redirect to="/login" /> : <Share />}
        </Route>
        <Route exact path="/profile">
          {!isLoggedIn ? <Redirect to="/login" /> : <Profile />}
        </Route>
        <Route exact path="/register">
          {isLoggedIn ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route exact path="/login">
          {isLoggedIn ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="" component={NotFound} />
      </Switch>
    </div>
  );
};

export default Home;
