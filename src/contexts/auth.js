import React, { createContext, useState } from 'react';
import { useAuthService } from '../services/auth.service';

export const AuthProvider = ({ children }) => {
  const authService = useAuthService();
  const [user, setUser] = useState(undefined);

  const signIn = async ({ email, password }) => {
    try {
      const response = await authService.signIn({ email, password });
      setUser(response[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = () => {
    authService.signOut();
    setUser(undefined);
  };

  return (
    <AuthContext.Provider
      value={{ isUserAuthenticated: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthContext = createContext({});

export default AuthContext;
