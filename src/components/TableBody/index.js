import React from "react";
import "./style.css";

function TableBody({ users }) {
  return (
    <tbody>
      {users.map((user) => (
        <tr key={user.id.value}>
          <td>{user.name.first}</td>
          <td>{user.name.last}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
