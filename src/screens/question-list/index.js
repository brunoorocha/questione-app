import React from 'react';
import QuestionList from './QuestionList';
import { useEvaluationContext } from '../../contexts/evaluation';

export default function QuestionListWithContext(props) {
  const { state } = useEvaluationContext();
  return <QuestionList {...props} questions={state.evaluationQuestions} />;
}
