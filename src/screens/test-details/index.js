import React from 'react';
import TestDetails from './TestDetails';
import { useAnsweredEvaluationsContext } from '../../contexts/answered-evaluations';

export default function TestDetailsContainer(props) {
  const { state } = useAnsweredEvaluationsContext();
  return (
    <TestDetails
      {...props}
      evaluation={state.selectedEvaluation}
      isLoadingEvaluationResult={state.isLoadingSelectedEvaluationResult}
    />
  );
}
