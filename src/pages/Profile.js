import React from "react";
import logo from "../assets/blue-origami-bird.png";
import Posts from "../components/posts/Posts";

const Profile = () => {
  return (
    <div className="Profile">
      <img src={logo} alt="" />
      <div className="personal-info">
        <p>
          <span>Email:</span>
          user@gmail.com
        </p>
        <p>
          <span>Posts: 9</span>
        </p>
      </div>
      <div>
        <h2>3 recent posts</h2>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
