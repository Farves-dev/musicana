import "../styles/main.scss";
import PauseCircle from "./PauseCircle";
import PlayCircle from "./PlayCircle";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <PauseCircle size={35} className="pause-circle" handlePause={handlePause} />
  ) : (
    <PlayCircle size={35} className="play-circle" handlePlay={handlePlay} />
  );

export default PlayPause;
