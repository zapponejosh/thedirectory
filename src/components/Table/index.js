import React from "react";
import "./style.css";

import TableTop from "../TableTop";
import TableBody from "../TableBody";

function Table({ users, requestSort }) {
  return (
    <table className="table">
      <TableTop requestSort={requestSort} />
      <TableBody users={users} />
    </table>
  );
}

export default Table;
