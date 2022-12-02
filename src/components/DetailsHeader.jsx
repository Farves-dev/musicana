import "../styles/main.scss";
import { chain } from "../assets";
import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => (
  <div className="detailsHeader-container">
    <div className="banner-gradient">
      <div className="banner-text">
        <p className="song-name">
          {artistId
            ? artistData?.artists[artistId].attributes?.name
            : songData?.title}
        </p>

        {!artistId && (
          <Link
            to={`/artists/${songData?.artists[0]?.adamid}`}
            className="link"
          >
            <p className="artist-name">{songData?.subtitle}</p>
          </Link>
        )}

        <p className="genre-name">
          {artistId
            ? artistData?.artists[artistId].attributes?.genreNames[0]
            : songData?.genres?.primary}
        </p>
      </div>
    </div>

    <div className="chainWith-hole">
      <div className="chainBanner-hole" />

      <img src={chain} alt="" className="chain-back" />
    </div>

    <div className="img">
      <div className="chainImg-hole" />

      <img
        alt="profile"
        src={
          artistId
            ? artistData?.artists[artistId].attributes?.artwork?.url
                .replace("{w}", "500")
                .replace("{h}", "500")
            : songData?.images?.coverart
        }
        className="detailsHeader-img"
      />
    </div>
  </div>
);

export default DetailsHeader;
