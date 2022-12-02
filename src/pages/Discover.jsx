import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGenreListId } from "../redux/features/playerSlice";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";
import "../styles/main.scss";

const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByGenreQuery(
    genreListId || "POP"
  );

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className="discover-container">
      <div className="genre-container">
        <h2 className="genre-title">Discover {genreTitle}</h2>

        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || "pop"}
          className="genre-select"
        >
          {genres.map((genre) => (
            <option
              className="genre-option"
              key={genre.value}
              value={genre.value}
            >
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="songs-container">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            i={i}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
