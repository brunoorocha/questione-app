import React from 'react';
import AnsweredTests from './AnsweredTests';
import { useEvaluationContext } from '../../contexts/evaluation';

export default function AnsweredTestsContainer(props) {
  const {
    evaluations,
    getEvaluations,
    isLoadingEvaluations,
    setSelectedEvaluation,
  } = useEvaluationContext();
  const contextProps = {
    evaluations,
    getEvaluations,
    isLoadingEvaluations,
    setSelectedEvaluation,
  };

  return <AnsweredTests {...props} {...contextProps} />;
}
