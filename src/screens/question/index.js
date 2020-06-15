import React from 'react';
import Question from './Question';
import { useEvaluationContext } from '../../contexts/evaluation';

export default function QuestionContainer(props) {
  const { state } = useEvaluationContext();
  const contextProps = {
    questions: state.evaluationQuestions,
    currentQuestionIndex: state.currentQuestionIndex,
    numberOfQuestions: state.numberOfQuestions,
  };

  return <Question {...props} {...contextProps} />;
}
