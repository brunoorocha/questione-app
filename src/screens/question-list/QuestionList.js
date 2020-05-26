import React from 'react';
import {
  BaseView,
  CloseButton,
  QuestionFlatList,
  QuestionItemState,
} from '../../components';

export default function QuestionList({ navigation }) {
  const questions = [
    {
      id: 1,
      title: 'Questão 01',
      state: QuestionItemState.answered,
    },
    {
      id: 2,
      title: 'Questão 02',
      state: QuestionItemState.answered,
    },
    {
      id: 3,
      title: 'Questão 03',
      state: QuestionItemState.notAnswered,
    },
    {
      id: 4,
      title: 'Questão 04',
      state: QuestionItemState.notAnswered,
    },
    {
      id: 5,
      title: 'Questão 05',
      state: QuestionItemState.notAnswered,
    },
  ];

  const onPressCloseButton = () => {
    navigation.goBack();
  };

  return (
    <BaseView
      title="Questões"
      navigationShowBackButton={false}
      navigationRightItem={<CloseButton onPress={onPressCloseButton} />}>
      <QuestionFlatList questions={questions} />
    </BaseView>
  );
}
