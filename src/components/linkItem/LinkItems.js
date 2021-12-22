import React, { useEffect, useState } from "react";
import blueBird from "../../assets/blue-origami-bird-flipped.png";
import whiteBird from "../../assets/white-origami-bird.png";
import LinkItem from "./LinkItem";

const LinkItems = ({ logo }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [linkItems, setLinkItems] = useState([]);
  useEffect(() => {
    if (isLoggedIn) {
      setLinkItems([
        {
          id: 1,
          title: "Post",
          url: "/",
        },
        {
          id: 2,
          title: "Share",
          url: "/share",
        },
        {
          id: 3,
          title: "Profile",
          url: "/profile",
        },
      ]);
    }
  });
  return (
    <ul>
      {logo === "navbar" && <img src={whiteBird} alt="" />}
      {linkItems.map((item) => (
        <LinkItem key={item.id} url={item.url} title={item.title} />
      ))}
      {logo === "footer" && <img src={blueBird} alt="bird logo" />}
    </ul>
  );
};

export default LinkItems;
