import React from 'react';
import Answers from './Answers';
import { useEvaluationContext } from '../../contexts/evaluation';

export default function TestDetailsContainer(props) {
  const { state } = useEvaluationContext();

  return (
    <Answers
      {...props}
      questionsAnswers={state.selectedEvaluation.result.questions}
    />
  );
}
