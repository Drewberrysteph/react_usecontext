import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [isLogged, setLogged] = useState(false);
  return (
    <AuthContext.Provider value={{ isLogged, setLogged }}>
      {props.children}
    </AuthContext.Provider>
  );
};
