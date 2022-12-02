import React, { useState, useEffect } from "react";
import "../styles/main.scss";
import axios from "axios";
import { Error, Loader, SongCard } from "../components";
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";
import { useSelector } from "react-redux";

const AroundYou = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=at_VyZrVdoYACkGrvWrHQ5CjZ5JV627U`
      )
      .then((res) => setCountry(res?.data?.location.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]);

  if (isFetching && loading)
    return <Loader title="Loading Songs around you..." />;

  if (error && country !== "") return <Error />;

  return (
    <div className="aroundYou-container">
      <h2 className="aroundYou-title">
        Around you <span className="aroundYou-span">{country}</span>
      </h2>

      <div className="aroundYou-songCard">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default AroundYou;
