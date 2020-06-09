import React from 'react';
import TestDetails from './TestDetails';
import { useEvaluationContext } from '../../contexts/evaluation';

export default function TestDetailsContainer(props) {
  const { state } = useEvaluationContext();
  return (
    <TestDetails
      {...props}
      evaluation={state.selectedEvaluation}
      isLoadingEvaluationResult={state.isLoadingSelectedEvaluationResult}
    />
  );
}
