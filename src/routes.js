import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './screens/sign-in/SignIn';
import ForgotPassword from './screens/forgot-password/ForgotPassword';
import SignUp from './screens/sign-up/SignUp';
import Home from './screens/home/Home';
import EnterCode from './screens/enter-code/EnterCode';
import Question from './screens/question/Question';
import { colors, BackButton } from './components';

const Stack = createStackNavigator();
const EvaluationStack = createStackNavigator();

const defaultOptions = {
  headerStyle: { backgroundColor: colors.white },
  headerTitleAlign: 'center',
  headerTintColor: colors.primaryColor,
  headerBackTitleVisible: false,
  headerTitleStyle: {
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
    textTransform: 'uppercase',
    color: colors.textColor,
    fontWeight: 'bold',
  },
  headerBackImage: () => <BackButton />,
};

export const routesNames = {
  login: 'Login',
  forgotPassword: 'ForgotPassword',
  signUp: 'SignUp',
  home: 'Home',
  enterCode: 'EnterCode',
  question: 'Question',
  evaluation: 'Evaluation',
};

function EvaluationNavigation() {
  return (
    <EvaluationStack.Navigator mode="modal">
      <Stack.Screen
        name={routesNames.enterCode}
        component={EnterCode}
        options={{
          ...defaultOptions,
          title: 'Realizar avaliação',
        }}
      />
      <Stack.Screen
        name={routesNames.question}
        component={Question}
        options={{ ...defaultOptions, headerShown: false }}
      />
    </EvaluationStack.Navigator>
  );
}

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
        <Stack.Screen
          name={routesNames.signUp}
          component={SignUp}
          options={{
            ...defaultOptions,
            title: 'Criar conta',
          }}
        />
        <Stack.Screen
          name={routesNames.home}
          component={Home}
          options={{
            ...defaultOptions,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={routesNames.evaluation}
          component={EvaluationNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
