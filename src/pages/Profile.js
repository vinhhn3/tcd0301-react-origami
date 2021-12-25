import React, { useContext } from "react";
import logo from "../assets/blue-origami-bird.png";
import PrivatePosts from "../components/posts/PrivatePosts";
import OrigamiContext from "../context/origami/origamiContext";
const Profile = () => {
  const origamiContext = useContext(OrigamiContext);
  const { logoutUser, username, privatePosts } = origamiContext;

  const onLogout = (e) => {
    logoutUser();
  };
  return (
    <div className="Profile">
      <img src={logo} alt="" />
      <div className="personal-info">
        <p>
          <span>Email:</span>
          {username}
        </p>
        <p>
          <span>Posts: {privatePosts.length}</span>
        </p>
      </div>
      <button onClick={onLogout}>Logout</button>
      <div>
        <h2>3 recent posts</h2>
        <PrivatePosts />
      </div>
    </div>
  );
};

export default Profile;
