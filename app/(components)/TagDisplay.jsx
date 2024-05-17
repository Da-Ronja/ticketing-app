import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TagDisplay = ({ tags }) => {
  return (
    <span className="flex">
      <FontAwesomeIcon icon={faTags} className="text-blue-400" />
      {tags.map((tag, index) => (
        <span key={index} className="text-xs px-1">
          #{tag},
        </span>
      ))}
    </span>
  );
};

export default TagDisplay;
