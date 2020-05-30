import React, { createContext, useState, useContext } from 'react';
import { useAuthService } from '../services/auth.service';

export const AuthProvider = ({ children }) => {
  const authService = useAuthService();
  const [user, setUser] = useState(undefined);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authenticationError, setAuthenticationError] = useState(undefined);

  const signIn = async ({ email, password }) => {
    try {
      setIsAuthenticating(true);
      const response = await authService.signIn({ email, password });
      setUser(response[0]);
    } catch (error) {
      setAuthenticationError(error);
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
        isAuthenticating,
        authenticationError,
        user,
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthContext = createContext({});

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }

  return context;
};
