import React from "react";
import "./style.css";

function TableTop({ handleSort, sortOrder }) {
  let orderBtn;
  if (sortOrder === "ascending") {
    orderBtn = <span>A-Z</span>;
  } else {
    orderBtn = <span>Z-A</span>;
  }
  return (
    <tr>
      <th>Image</th>
      <th onClick={handleSort}>Name {orderBtn}</th>
      <th>Email</th>
    </tr>
  );
}

export default TableTop;
