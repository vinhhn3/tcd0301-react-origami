import React, { useState } from "react";
import blueBird from "../../assets/blue-origami-bird-flipped.png";
import whiteBird from "../../assets/white-origami-bird.png";
import LinkItem from "./LinkItem";

const LinkItems = ({ logo }) => {
  const [linkItems, setLinkItems] = useState([
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
      title: "Register",
      url: "",
    },
    {
      id: 4,
      title: "Login",
      url: "",
    },
    {
      id: 5,
      title: "Profile",
      url: "",
    },
    {
      id: 6,
      title: "#####",
      url: "",
    },
    {
      id: 7,
      title: "#####",
      url: "",
    },
    {
      id: 8,
      title: "#####",
      url: "",
    },
    {
      id: 9,
      title: "#####",
      url: "",
    },
    {
      id: 10,
      title: "#####",
      url: "",
    },
    {
      id: 11,
      title: "#####",
      url: "",
    },
  ]);
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
