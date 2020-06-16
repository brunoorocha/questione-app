import React from 'react';
import QuestionList from './QuestionList';
import { useEvaluationContext } from '../../contexts/evaluation';

export default function QuestionListWithContext(props) {
  const { state, setCurrentQuestionIndex } = useEvaluationContext();
  const contextProps = {
    questions: state.evaluationQuestions,
    setCurrentQuestionIndex,
  };

  return <QuestionList {...props} {...contextProps} />;
}
