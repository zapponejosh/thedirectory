import React from "react";
import "./style.css";

import TableTop from "../TableTop";
import TableBody from "../TableBody";

function Table({ users }) {
  return (
    <table className="table">
      <TableTop />
      <TableBody users={users} />
    </table>
  );
}

export default Table;
