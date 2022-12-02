import "../styles/main.scss";

import React from "react";

import { ArtistCard, Error, Loader } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading artists..." />;

  if (error) return <Error />;

  return (
    <div className="topArtists-container">
      <h2 className="topArtists-title">Top artists</h2>

      <div className="topArtists-artistCard">
        {data?.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
