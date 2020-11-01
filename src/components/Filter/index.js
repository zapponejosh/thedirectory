import React from "react";
import "./style.css";

function Filter({ handleInputChange, filter }) {
  return (
    <div className="filter-div">
      <h3>Search the directory or sort by first or last name.</h3>
      <div className="searchbar">
        <p>
          Search:
          <input
            className="search-field"
            type="text"
            name="search"
            id="search"
            value={filter}
            onChange={handleInputChange}
          />
        </p>
      </div>
    </div>
  );
}

export default Filter;
