import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import AnsweredTests from '../screens/answered-tests';
import TestDetails from '../screens/test-details';
import Answers from '../screens/answers';
import EvaluationStack from './evaluation.stack';
import { routesNames } from './routesNames';

const AppStack = createStackNavigator();

export default function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name={routesNames.home}
        component={Home}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name={routesNames.answeredTests}
        component={AnsweredTests}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name={routesNames.testDetails}
        component={TestDetails}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name={routesNames.answers}
        component={Answers}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name={routesNames.evaluation}
        component={EvaluationStack}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
}
