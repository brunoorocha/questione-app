import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';
import { AuthProvider } from './contexts/auth';
import { colors } from './components';

export default function App() {
  return (
    <AuthProvider>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <Routes />
    </AuthProvider>
  );
}
