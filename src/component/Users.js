import React, { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import { AuthContext } from "../context/AuthContext";

import AddUser from "./AddUser";

function Users() {
  const { users } = useContext(UsersContext);
  const { isLogged, setLogged } = useContext(AuthContext);

  const allUsers = users.map((user, idx) => (
    <div key={idx}>
      {user.name} {user.lastName}
    </div>
  ));

  const handleBtn = () => {
    setLogged(!isLogged);
  };

  return (
    <div>
      {isLogged ? allUsers : "Please login"}
      {!isLogged && <button onClick={handleBtn}> Log in </button>}
      <AddUser />
    </div>
  );
}

export default Users;
