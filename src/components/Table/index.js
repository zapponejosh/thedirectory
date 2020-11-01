import React from "react";
import "./style.css";

import TableTop from "../TableTop";
import TableBody from "../TableBody";

function Table({ users, requestSort, sortConfig }) {
  return (
    <div className="table-container">
      <table>
        <TableTop requestSort={requestSort} sortConfig={sortConfig} />
        <TableBody users={users} />
      </table>
    </div>
  );
}

export default Table;
