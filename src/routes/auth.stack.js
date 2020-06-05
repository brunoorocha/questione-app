import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/sign-in';
import ForgotPassword from '../screens/forgot-password/ForgotPassword';
import SignUp from '../screens/sign-up/SignUp';
import { routesNames } from './routesNames';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={routesNames.login}
        component={SignIn}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={routesNames.forgotPassword}
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={routesNames.signUp}
        component={SignUp}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}
