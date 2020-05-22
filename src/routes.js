import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './screens/sign-in/SignIn';
import ForgotPassword from './screens/forgot-password/ForgotPassword';
import { colors } from './components';

Icon.loadFont();
const Stack = createStackNavigator();

const defaultOptions = {
  headerStyle: { backgroundColor: colors.white },
  headerTitleAlign: 'center',
  headerTintColor: colors.primaryColor,
  headerBackTitleVisible: false,
  headerTitleStyle: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    textTransform: 'uppercase',
    color: colors.textColor,
  },
};

export const routesNames = {
  login: 'Login',
  forgotPassword: 'ForgotPassword',
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={routesNames.login}
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={routesNames.forgotPassword}
          component={ForgotPassword}
          options={{ ...defaultOptions, title: 'Esqueci minha senha' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
