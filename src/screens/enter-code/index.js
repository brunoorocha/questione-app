import React from 'react';
import EnterCode from './EnterCode';
import { useEvaluationContext } from '../../contexts/evaluation';

export default function EnterCodeContainer(props) {
  const { state, startEvaluation } = useEvaluationContext();

  return (
    <EnterCode
      {...props}
      startEvaluation={startEvaluation}
      isLoadingEvaluationQuestions={state.isLoadingEvaluationQuestions}
    />
  );
}
