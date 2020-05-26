import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './screens/sign-in/SignIn';
import ForgotPassword from './screens/forgot-password/ForgotPassword';
import SignUp from './screens/sign-up/SignUp';
import Home from './screens/home/Home';
import EnterCode from './screens/enter-code/EnterCode';
import Question from './screens/question/Question';
import QuestionDetails from './screens/question-details/QuestionDetails';
import QuestionList from './screens/question-list/QuestionList';
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
  evaluation: 'Evaluation',
  enterCode: 'EnterCode',
  question: 'Question',
  questionDetails: 'QuestionDetails',
  questionList: 'QuestionList',
};

function EvaluationNavigation() {
  return (
    <EvaluationStack.Navigator mode="modal">
      <Stack.Screen
        name={routesNames.enterCode}
        component={EnterCode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routesNames.question}
        component={Question}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name={routesNames.questionDetails}
        component={QuestionDetails}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name={routesNames.questionList}
        component={QuestionList}
        options={{ headerShown: false, gestureEnabled: false }}
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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={routesNames.signUp}
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={routesNames.home}
          component={Home}
          options={{ headerShown: false }}
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
