import "../styles/main.scss";

import React from "react";
import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();
  
  return (
    <div
      className="artistCard-container"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img
        alt="song_img"
        src={track?.images?.coverart}
        className="artistCard-img"
      />
      <p className="artistCard-subtitle">{track?.subtitle}</p>
    </div>
  );
};

export default ArtistCard;
