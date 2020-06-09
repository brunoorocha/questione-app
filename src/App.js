import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';
import { AuthProvider } from './contexts/auth';
import { MessageCenterProvider } from './contexts/message-center';
import { EvaluationContextProvider } from './contexts/evaluation';
import { colors } from './components';
import { MessageCenter } from './components';

export default function App() {
  return (
    <MessageCenterProvider>
      <AuthProvider>
        <EvaluationContextProvider>
          <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
          <Routes />
          <MessageCenter />
        </EvaluationContextProvider>
      </AuthProvider>
    </MessageCenterProvider>
  );
}
