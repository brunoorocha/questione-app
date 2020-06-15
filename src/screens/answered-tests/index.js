import React from 'react';
import AnsweredTests from './AnsweredTests';
import { useAnsweredEvaluationsContext } from '../../contexts/answered-evaluations';

export default function AnsweredTestsContainer(props) {
  const {
    state,
    getAnsweredEvaluations,
    setSelectedEvaluation,
  } = useAnsweredEvaluationsContext();
  const contextProps = {
    evaluations: state.answeredEvaluations,
    isLoadingEvaluations: state.isLoadingAnsweredEvaluations,
    getAnsweredEvaluations,
    setSelectedEvaluation,
  };

  console.log(state);

  return <AnsweredTests {...props} {...contextProps} />;
}
