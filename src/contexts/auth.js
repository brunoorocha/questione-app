import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAsyncStorage } from '../services/async-storage.service';
import { useAuthService } from '../services/auth.service';
import { useMessageCenterContext } from './message-center';

export const AuthProvider = ({ children }) => {
  const authService = useAuthService();
  const asyncStorage = useAsyncStorage();
  const [user, setUser] = useState(undefined);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authenticationError, setAuthenticationError] = useState(undefined);
  const { dispatchMessage } = useMessageCenterContext();

  useEffect(() => {
    let canUpdate = true;
    const loadStoragedData = async () => {
      const storagedUserData = await asyncStorage.getUser();
      const storagedToken = await asyncStorage.getToken();

      if (storagedUserData && storagedToken && canUpdate) {
        setUser(storagedUserData);
      }
    };

    loadStoragedData();

    return () => (canUpdate = false);
  }, [asyncStorage]);

  const signIn = async ({ email, password }) => {
    try {
      setIsAuthenticating(true);
      // eslint-disable-next-line prettier/prettier
      const { user: userData, token } = await authService.signIn({ email, password });
      setUser(userData);

      await asyncStorage.setToken(token);
      await asyncStorage.setUser(userData);
    } catch (error) {
      dispatchMessage({ text: error.message });
    } finally {
      setAuthenticationError(undefined);
      setIsAuthenticating(false);
    }
  };

  const signUp = async ({ name, cpf, email, password }) => {
    try {
      setIsAuthenticating(true);
      await authService.signUp({ name, cpf, email, password });
      signIn({ email, password });
    } catch (error) {
      setAuthenticationError(error);
    } finally {
      setAuthenticationError(undefined);
      setIsAuthenticating(false);
    }
  };

  const signOut = async () => {
    await asyncStorage.clearStorage();
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
        signUp,
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
    throw new Error('useAuthContext must be used inside a AuthProvider');
  }

  return context;
};
