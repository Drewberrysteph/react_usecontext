import React, { createContext, useState } from "react";

export const UsersContext = createContext();

export const UsersProvider = (props) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "drew",
      lastName: "stifler",
    },
    {
      id: 2,
      name: "jane",
      lastName: "doe",
    },
  ]);
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {props.children}
    </UsersContext.Provider>
  );
};
