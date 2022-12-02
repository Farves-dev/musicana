import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.scss";

import PlayPause from "./PlayPause";

const SongBar = ({
  song,
  i,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div
    className={`songBar-container ${
      activeSong?.title === song?.title ? "low-opac" : "high-opac"
    }`}
  >
    <h3 className="songBar-rollNum">{i + 1}.</h3>
    <div className="songBar-content">
      <img
        className="songBar-img"
        src={
          artistId
            ? song?.attributes?.artwork?.url
                .replace("{w}", "125")
                .replace("{h}", "125")
            : song?.images?.coverart
        }
        alt={song?.title}
      />
      <div className="songBar-text">
        {!artistId ? (
          <Link to={`/songs/${song.key}`} className="link">
            <p className="songBar-title">{song?.title}</p>
          </Link>
        ) : (
          <p className="songBar-title">{song?.attributes?.name}</p>
        )}
        <p className="songBar-subTitle">
          {artistId ? song?.attributes?.albumName : song?.subtitle}
        </p>
      </div>
    </div>
    {!artistId ? (
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={() => handlePlayClick(song, i)}
      />
    ) : null}
  </div>
);

export default SongBar;
