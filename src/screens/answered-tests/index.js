import React from 'react';
import AnsweredTests from './AnsweredTests';
import {
  useEvaluationContext,
  EvaluationContextProvider,
} from '../../contexts/evaluation';

export default function AnsweredTestsContainerWithEvaluationsContext(props) {
  return (
    <EvaluationContextProvider>
      <AnsweredTestsContainer {...props} />
    </EvaluationContextProvider>
  );
}

const AnsweredTestsContainer = (props) => {
  const {
    evaluations,
    getEvaluations,
    isLoadingEvaluations,
  } = useEvaluationContext();
  const contextProps = { evaluations, getEvaluations, isLoadingEvaluations };

  return <AnsweredTests {...props} {...contextProps} />;
};
