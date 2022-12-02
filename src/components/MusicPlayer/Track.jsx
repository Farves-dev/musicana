import React from "react";
import "../../styles/main.scss";

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="track-container">
    <div
      className={`${isPlaying && isActive ? "track-spin" : ""} track-spinner`}
    >
      <img
        src={activeSong?.images?.coverart}
        alt="cover art"
        className="track-img"
      />
    </div>
    <div className="track-text">
      <p className="track-title">
        {activeSong?.title ? activeSong?.title : "No active Song"}
      </p>
      <p className="track-subtitle">
        {activeSong?.subtitle ? activeSong?.subtitle : "No active Song"}
      </p>
    </div>
  </div>
);

export default Track;
