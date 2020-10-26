import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Filter from "../components/Filter";
import Table from "../components/Table";

function Directory() {
  // const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  // const [userIndex, setUserIndex] = useState(0);

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    API.getUsers()
      .then((users) => {
        setUsers(users.data.results);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <h1 className="text-center">It&apos;s an app!</h1>
      <Filter />
      <Table users={users} />
    </div>
  );
}

export default Directory;
