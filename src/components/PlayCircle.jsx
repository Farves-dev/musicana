import React from "react";
import "../styles/main.scss";

const PlayCircle = ({ handlePlay }) => {
  return (
    <div className="play-container" onClick={handlePlay}>
      <div className="triangle"></div>
    </div>
  );
};

export default PlayCircle;
