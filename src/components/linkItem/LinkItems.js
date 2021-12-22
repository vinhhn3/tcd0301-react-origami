import React, { useContext } from "react";
import blueBird from "../../assets/blue-origami-bird-flipped.png";
import whiteBird from "../../assets/white-origami-bird.png";
import OrigamiContext from "../../context/origami/origamiContext";
import LinkItem from "./LinkItem";

const LinkItems = ({ logo }) => {
  const origamiContext = useContext(OrigamiContext);
  const { linkItems } = origamiContext;

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
