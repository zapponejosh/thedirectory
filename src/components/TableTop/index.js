import React from "react";
import "./style.css";

function TableTop({ requestSort, sortConfig }) {
  function getIcon(col) {
    let sortIconUp = <i className="fas fa-sort-up fa-2x"></i>;
    let sortIconDown = <i className="fas fa-sort-down fa-2x"></i>;

    if (!sortConfig) {
      return;
    }
    if (sortConfig.column === col) {
      return sortConfig.direction === "ascending" ? sortIconDown : sortIconUp;
    } else {
      return;
    }
  }

  return (
    <thead>
      <tr>
        <th>Image</th>
        <th className="sort-col" onClick={() => requestSort("first")}>
          First Name {getIcon("first")}
        </th>
        <th className="sort-col" onClick={() => requestSort("last")}>
          Last Name {getIcon("last")}
        </th>
        <th>Email</th>
      </tr>
    </thead>
  );
}

export default TableTop;
