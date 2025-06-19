import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(null);

  const login = (emailUsuario) => {
    setEmail(emailUsuario);
  };

  const logout = () => {
    setEmail(null);
  };
  return (
    <AuthContext.Provider value={{ email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
