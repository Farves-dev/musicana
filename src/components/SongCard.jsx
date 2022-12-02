import "../styles/main.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="songCard-container">
      <div className="img-container">
        <img className="songCard-img" src={song.images?.coverart} alt="" />

        <div
          className={`card-overlay ${
            activeSong?.title === song.title ? "activeSong" : "noActiveSong"
          }`}
        >
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
      </div>

      <div className="songCard-text">
        <p className="songCard-title">
          <Link className="link" to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className="songCard-subtitle">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
            className="link"
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
