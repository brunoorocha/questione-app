import React, { createContext, useState } from 'react';
import { useAuthService } from '../services/auth.service';

export const AuthProvider = ({ children }) => {
  const authService = useAuthService();
  const [user, setUser] = useState({});

  const signIn = async ({ email, password }) => {
    const response = await authService.signIn({ email, password });
    setUser(response[0]);
  };

  // const signUp = async ({ name, cpf, email, password }) => {
  //   const response = await authService.signUp({ name, cpf, email, password });
  //   setUser(response[0]);
  // };

  return (
    <AuthContext.Provider value={{ isUserAuthenticated: !!user, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthContext = createContext({});

export default AuthContext;
