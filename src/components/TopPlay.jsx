import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import "swiper/css";
import "swiper/css/free-mode";
import "../styles/main.scss";

const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  return (
    <div className="topChartCard-container">
      <h3 className="topChartCard-rollNum">{i + 1}.</h3>

      <div className="topChartCard-content">
        <img
          src={song?.images?.coverart}
          alt={song?.title}
          className="topChartCard-img"
        />

        <div className="topChartCard-textWrapper">
          <Link to={`/songs/${song.key}`} className="link">
            <p className="topChartCard-title">{song?.title}</p>
          </Link>
          <Link to={`/artists/${song?.artists[0].adamid}`} className="link">
            <p className="topChartCard-subTitle">{song?.subtitle}</p>
          </Link>
        </div>
      </div>
      <div className="playPause-wrapper">
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
      </div>
    </div>
  );
};

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);
  const topPlays = data?.slice(0, 5);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div ref={divRef} className="topPlay-container">
      <div className="topChart-wrapper">
        <div className="topChartText-wrapper">
          <h2 className="topChart-heading">Top Charts</h2>
          <Link to="/top-charts" className="link">
            <p className="topChart-seeMore">See more</p>
          </Link>
        </div>

        <div className="topChartCard-wrapper">
          {topPlays?.map((song, i) => (
            <TopChartCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </div>

      <div className="topArtist-wrapper">
        <div className="topArtistText-wrapper">
          <h2 className="topArtist-heading">Top Artists</h2>
          <Link to="/top-artists" className="link">
            <p className="topArtist-seeMore">See more</p>
          </Link>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="swiper-wrapper"
        >
          {topPlays?.slice(0, 5).map((artist) => (
            <SwiperSlide
              key={artist?.key}
              style={{ width: "25%", height: "auto" }}
              className="swiperSlide"
            >
              <Link to={`/artists/${artist?.artists[0].adamid}`}>
                <img
                  src={artist?.images?.background}
                  alt="Name"
                  className="artist-img"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
