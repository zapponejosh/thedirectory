import React from "react";
import "./style.css";

function Filter({ handleInputChange, filter }) {
  return (
    <div>
      <h2>Search the directory or sort by first or last name.</h2>
      <p>
        Search:
        <input
          type="text"
          name="search"
          id="search"
          value={filter}
          onChange={handleInputChange}
        />
      </p>
    </div>
  );
}

export default Filter;
