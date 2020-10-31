import React from "react";
import "./style.css";

function TableTop({ requestSort }) {
  return (
    <thead>
      <tr>
        <th>Image</th>
        <th onClick={() => requestSort("first")}>First Name</th>
        <th onClick={() => requestSort("last")}>Last Name</th>
        <th>Email</th>
      </tr>
    </thead>
  );
}

export default TableTop;
