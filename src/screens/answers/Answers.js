import React from 'react';
import {
  BaseView,
  QuestionFlatList,
  QuestionItemState,
} from '../../components';

export default function Answers({ navigation }) {
  const questions = [
    {
      id: 1,
      title: 'Questão 01',
      state: QuestionItemState.right,
    },
    {
      id: 2,
      title: 'Questão 02',
      state: QuestionItemState.right,
    },
    {
      id: 3,
      title: 'Questão 03',
      state: QuestionItemState.wrong,
    },
    {
      id: 4,
      title: 'Questão 04',
      state: QuestionItemState.right,
    },
    {
      id: 5,
      title: 'Questão 05',
      state: QuestionItemState.wrong,
    },
  ];

  return (
    <BaseView title="Gabarito" navigation={navigation}>
      <QuestionFlatList questions={questions} isSelectable={false} />
    </BaseView>
  );
}
