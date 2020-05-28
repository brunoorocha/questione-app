import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthContext from '../contexts/auth';
import AuthRoutes from './auth.stack';
import AppRoutes from './app.stack';

export default function Routes() {
  const { isUserAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isUserAuthenticated ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
