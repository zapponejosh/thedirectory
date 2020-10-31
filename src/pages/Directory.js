import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Filter from "../components/Filter";
import Table from "../components/Table";
import useSort from "../utils/useSort";

function Directory() {
  const [users, setUsers] = useState([]);

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    API.getUsers()
      .then((users) => {
        const userList = () => {
          const list = [];
          users.data.results.forEach((user) => {
            list.push({
              id: user.id.value,
              image: user.picture.medium,
              first: user.name.first,
              last: user.name.last,
              email: user.email,
            });
          });
          return list;
        };
        setUsers(userList);
      })
      .catch((err) => console.log(err));
  }

  const { sortedUsers, requestSort } = useSort(users);

  return (
    <div>
      <h1 className="text-center">It&apos;s an app!</h1>
      <Filter />
      <Table users={sortedUsers} requestSort={requestSort} />
    </div>
  );
}

export default Directory;
