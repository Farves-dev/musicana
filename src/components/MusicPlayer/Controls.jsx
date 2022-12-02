import React from "react";
import { AiFillStepForward, AiFillStepBackward } from "react-icons/ai";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { IoRepeat, IoShuffle } from "react-icons/io5";
import "../../styles/main.scss";

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => (
  <div className="control-container">
    <IoRepeat
      size={25}
      onClick={() => setRepeat((prev) => !prev)}
      className={`repeat-icon ${repeat ? "repeat-active" : "repeat-noActive"}`}
    />
    {currentSongs?.length && (
      <AiFillStepBackward
        size={30}
        className="backward-icon"
        onClick={handlePrevSong}
      />
    )}
    {isPlaying ? (
      <BsFillPauseFill
        size={40}
        onClick={handlePlayPause}
        className="pause-icon"
      />
    ) : (
      <BsFillPlayFill
        size={40}
        onClick={handlePlayPause}
        className="play-icon"
      />
    )}
    {currentSongs?.length && (
      <AiFillStepForward
        size={30}
        className="forward-icon"
        onClick={handleNextSong}
      />
    )}
    <IoShuffle
      size={25}
      onClick={() => setShuffle((prev) => !prev)}
      className={`shuffle-icon ${
        shuffle ? "shuffle-active" : "shuffle-noActive"
      }`}
    />
  </div>
);

export default Controls;
