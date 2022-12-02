import React from "react";
import "../styles/main.scss";

const PauseCircle = ({ handlePause }) => {
  return (
    <div className="pause-container" onClick={handlePause}>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
    </div>
  );
};

export default PauseCircle;
