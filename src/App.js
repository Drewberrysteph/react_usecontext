import React from "react";
import { UsersProvider } from "./context/UsersContext";
import Users from "./component/Users";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <UsersProvider>
      <AuthProvider>
        <h3>App Component</h3>
        <Users />
      </AuthProvider>
    </UsersProvider>
  );
};

export default App;
