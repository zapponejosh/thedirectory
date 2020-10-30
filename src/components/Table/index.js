import React from "react";
import "./style.css";

import TableTop from "../TableTop";
import TableBody from "../TableBody";

function Table({ users, handleSort, sortOrder }) {
  return (
    <table className="table">
      <TableTop handleSort={handleSort} sortOrder={sortOrder} />
      <TableBody users={users} />
    </table>
  );
}

export default Table;
