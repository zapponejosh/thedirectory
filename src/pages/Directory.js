import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Filter from "../components/Filter";
import Table from "../components/Table";

function Directory() {
  // const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");

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

  function sortUsers() {
    const sorted = users.sort(function (a, b) {
      var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
      if (sortOrder === "ascending") {
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
      } else {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      }
      // names must be equal
      return 0;
    });
    return sorted;
  }

  function handleSort() {
    console.log(sortOrder);
    if (sortOrder === "ascending") {
      setSortOrder("descending");
    } else if (sortOrder === "descending") {
      setSortOrder("ascending");
    }
    const newUsers = sortUsers();
    setUsers(newUsers);
  }
  return (
    <div>
      <h1 className="text-center">It&apos;s an app!</h1>
      <Filter />
      <Table users={users} handleSort={handleSort} sortOrder={sortOrder} />
    </div>
  );
}

export default Directory;
