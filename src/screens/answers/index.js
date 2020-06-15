import React from 'react';
import Answers from './Answers';
import { useAnsweredEvaluationsContext } from '../../contexts/answered-evaluations';

export default function TestDetailsContainer(props) {
  const { state } = useAnsweredEvaluationsContext();

  return (
    <Answers
      {...props}
      questionsAnswers={state.selectedEvaluation.result.questions}
    />
  );
}
