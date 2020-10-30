import React from "react";
import "./style.css";

function TableBody({ users }) {
  return (
    <tbody>
      {users.map((user) => (
        <tr key={user.id.value}>
          <td>
            <img
              className="user-img"
              src={user.picture.medium}
              alt="user-thumnail"
            />
          </td>
          <td>{`${user.name.first} ${user.name.last}`}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
