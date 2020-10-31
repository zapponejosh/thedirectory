import React from "react";
import "./style.css";

function TableBody({ users }) {
  return (
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>
            <img className="user-img" src={user.image} alt="user-thumnail" />
          </td>
          <td>{user.first}</td>
          <td>{user.last}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
