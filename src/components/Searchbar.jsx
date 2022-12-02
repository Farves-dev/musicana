import "../styles/main.scss";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ImSearch } from "react-icons/im";

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="searchbar-form">
      <label htmlFor="search-field" className="searchbar-label">
        Search all files
      </label>
      <div className="searchbar-container">
        <ImSearch aria-hidden="true" className="search-icon" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="searchbar-input"
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Searchbar;
