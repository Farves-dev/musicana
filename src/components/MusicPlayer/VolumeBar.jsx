import React from "react";
import { TiVolumeUp, TiVolumeDown, TiVolumeMute } from "react-icons/ti";
import "../../styles/main.scss";

const VolumeBar = ({ value, min, max, onChange, setVolume }) => (
  <div className="volume-container">
    {value <= 1 && value > 0.5 && (
      <TiVolumeUp
        size={25}
        onClick={() => setVolume(0)}
        className="volumeUp-icon"
      />
    )}
    {value <= 0.5 && value > 0 && (
      <TiVolumeDown
        size={25}
        onClick={() => setVolume(0)}
        className="volumeDown-icon"
      />
    )}
    {value <= 0 && (
      <TiVolumeMute
        size={25}
        onClick={() => setVolume(1)}
        className="volumeMute-icon"
      />
    )}
    <input
      type="range"
      step="any"
      value={value}
      min={min}
      max={max}
      onChange={onChange}
      className="volume-line"
    />
  </div>
);

export default VolumeBar;
