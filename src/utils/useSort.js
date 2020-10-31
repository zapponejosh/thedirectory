import { useMemo, useState } from "react";

const useSort = (users) => {
  // example {column: first name, direction: ascending}
  const [sortConfig, setSortConfig] = useState({
    column: "first",
    direction: "ascending",
  });

  const sortedUsers = useMemo(() => {
    let sortableUsers = [...users];
    sortableUsers.sort((a, b) => {
      let nameA = a[sortConfig.column].toUpperCase();
      let nameB = b[sortConfig.column].toUpperCase();
      if (nameA < nameB) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (nameA > nameB) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    return sortableUsers;
  }, [users, sortConfig]);

  const requestSort = (column) => {
    let direction = "ascending";
    if (sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ column, direction });
  };

  return { sortedUsers, requestSort, sortConfig };
};

export default useSort;
