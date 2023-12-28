import React from "react";
import "./Css/SearchBox.css";

const SearchBox = () => {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
          type="text"
          className="search-box"
          placeholder="Search here..."
        />
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a7.5 7.5 0 1 0-1.397 1.398h0a7.5 7.5 0 0 0 1.397-1.398zM2 7.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0z" />
        </svg>
      </div>
    </div>
  );
};

export default SearchBox;
