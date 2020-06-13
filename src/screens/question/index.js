import React from 'react';
import Question from './Question';
import { useEvaluationContext } from '../../contexts/evaluation';

export default function QuestionContainer(props) {
  const { state } = useEvaluationContext();
  return <Question {...props} questions={state.evaluationQuestions} />;
}
