import React, { createContext, useState } from 'react';
import { useAuthService } from '../services/auth.service';

export const AuthProvider = ({ children }) => {
  const authService = useAuthService();
  const [user, setUser] = useState(undefined);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signIn = async ({ email, password }) => {
    try {
      setIsAuthenticating(true);
      const response = await authService.signIn({ email, password });
      setUser(response[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsAuthenticating(false);
    }
  };

  const signOut = () => {
    authService.signOut();
    setUser(undefined);
  };

  return (
    <AuthContext.Provider
      value={{
        isUserAuthenticated: !!user,
        user,
        isAuthenticating,
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthContext = createContext({});

export default AuthContext;
