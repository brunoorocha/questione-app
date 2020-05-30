import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuthContext } from '../contexts/auth';
import AuthRoutes from './auth.stack';
import AppRoutes from './app.stack';

export default function Routes() {
  const { isUserAuthenticated } = useAuthContext();

  return (
    <NavigationContainer>
      {isUserAuthenticated ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
