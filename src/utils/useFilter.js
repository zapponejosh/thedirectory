import { useEffect, useState } from "react";

const useFilter = (users, filterStr = "") => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    const unFilteredUsers = [...users];

    setFilteredUsers(
      unFilteredUsers.filter((e) => {
        let first = e.first.toLowerCase();
        let last = e.last.toLowerCase();

        return (
          first.includes(filterStr.toLowerCase()) ||
          last.includes(filterStr.toLowerCase())
        );
      })
    );
  }, [users, filterStr]);

  return filteredUsers;
};

export default useFilter;
