import React from "react";

const LinkItem = ({ url, title }) => {
  return (
    <li className="listItem">
      <a href={url}>{title}</a>
    </li>
  );
};

export default LinkItem;
