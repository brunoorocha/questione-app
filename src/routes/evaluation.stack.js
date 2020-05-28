import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EnterCode from '../screens/enter-code/EnterCode';
import Question from '../screens/question/Question';
import QuestionDetails from '../screens/question-details/QuestionDetails';
import QuestionList from '../screens/question-list/QuestionList';
import { routesNames } from './routes-names';

const EvaluationStack = createStackNavigator();

export default function EvaluationRoutes() {
  return (
    <EvaluationStack.Navigator>
      <EvaluationStack.Screen
        name={routesNames.enterCode}
        component={EnterCode}
        options={{ headerShown: false }}
      />
      <EvaluationStack.Screen
        name={routesNames.question}
        component={Question}
        options={{ headerShown: false }}
      />
      <EvaluationStack.Screen
        name={routesNames.questionDetails}
        component={QuestionDetails}
        options={{ headerShown: false }}
      />
      <EvaluationStack.Screen
        name={routesNames.questionList}
        component={QuestionList}
        options={{ headerShown: false }}
      />
    </EvaluationStack.Navigator>
  );
}
