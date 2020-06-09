import React from 'react';
import {
  BaseView,
  QuestionFlatList,
  QuestionItemState,
} from '../../components';

export default function Answers({ navigation, questionsAnswers = [] }) {
  const questions = questionsAnswers.map((question) => ({
    ...question,
    state: question.isCorrect
      ? QuestionItemState.correct
      : QuestionItemState.wrong,
  }));

  return (
    <BaseView title="Suas respostas" navigation={navigation}>
      <QuestionFlatList questions={questions} isSelectable={false} />
    </BaseView>
  );
}
