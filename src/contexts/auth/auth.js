import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { useAsyncStorage } from '../../services/async-storage.service';
import { useAuthService } from '../../services/auth.service';
import { useMessageCenterContext } from '../message-center';
import { authContextReducer, actionTypes } from './reducer';

export const AuthProvider = ({ children }) => {
  const authService = useAuthService();
  const asyncStorage = useAsyncStorage();
  const { dispatchMessage } = useMessageCenterContext();
  const initialState = {
    user: undefined,
    isAuthenticating: false,
  };

  const [state, dipatch] = useReducer(authContextReducer, initialState);

  useEffect(() => {
    let canUpdate = true;
    const loadStoragedData = async () => {
      const storagedUserData = await asyncStorage.getUser();
      const storagedToken = await asyncStorage.getToken();

      if (storagedUserData && storagedToken && canUpdate) {
        dipatch({
          type: actionTypes.SET_USER,
          payload: { user: storagedUserData },
        });
      }
    };

    loadStoragedData();
    return () => (canUpdate = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signIn = async ({ email, password }) => {
    try {
      dipatch({ type: actionTypes.AUTHENTICATION_START });
      // eslint-disable-next-line prettier/prettier
      const { user: userData, token } = await authService.signIn({ email, password });
      dipatch({
        type: actionTypes.SET_USER,
        payload: { user: userData },
      });

      await asyncStorage.setToken(token);
      await asyncStorage.setUser(userData);
    } catch (error) {
      dispatchMessage({ text: error.message });
    } finally {
      dipatch({ type: actionTypes.AUTHENTICATION_END });
    }
  };

  const signUp = async ({ name, cpf, email, password }) => {
    try {
      dipatch({ type: actionTypes.AUTHENTICATION_START });
      await authService.signUp({ name, cpf, email, password });
      signIn({ email, password });
    } catch (error) {
      dispatchMessage({ text: error.message });
    } finally {
      dipatch({ type: actionTypes.AUTHENTICATION_END });
    }
  };

  const signOut = async () => {
    await asyncStorage.clearStorage();
    authService.signOut();
    dipatch({
      type: actionTypes.SET_USER,
      payload: { user: undefined },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isUserAuthenticated: !!state.user,
        state,
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
