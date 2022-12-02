import React from "react";
import "../../styles/main.scss";

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <div className="seekBar-container">
      <button
        type="button"
        onClick={() => setSeekTime(appTime - 5)}
        className="minus-btn"
      >
        -
      </button>
      <p className="starting-number">{value === 0 ? "0:00" : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
      />
      <p className="ending-number">{max === 0 ? "0:00" : getTime(max)}</p>
      <button
        type="button"
        onClick={() => setSeekTime(appTime + 5)}
        className="plus-btn"
      >
        +
      </button>
    </div>
  );
};

export default Seekbar;
