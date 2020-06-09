import React from 'react';
import AnsweredTests from './AnsweredTests';
import { useEvaluationContext } from '../../contexts/evaluation';

export default function AnsweredTestsContainer(props) {
  const {
    state,
    getEvaluations,
    setSelectedEvaluation,
  } = useEvaluationContext();
  const contextProps = {
    evaluations: state.evaluations,
    isLoadingEvaluations: state.isLoadingEvaluations,
    getEvaluations,
    setSelectedEvaluation,
  };

  return <AnsweredTests {...props} {...contextProps} />;
}
