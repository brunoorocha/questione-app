import React from 'react';
import {
  BaseView,
  CloseButton,
  QuestionFlatList,
  QuestionItemState,
} from '../../components';

export default function QuestionList({
  navigation,
  questions = [],
  setCurrentQuestionIndex = () => {},
}) {
  const questionList = questions.map((question, index) => ({
    id: index + 1,
    title: `Questão ${index + 1}`,
    state: question.isAnswered
      ? QuestionItemState.answered
      : QuestionItemState.notAnswered,
  }));

  const onPressCloseButton = () => {
    navigation.goBack();
  };

  const onSelectQuestionWithIndex = (index) => {
    setCurrentQuestionIndex({ questionIndex: index });
    navigation.goBack();
  };

  return (
    <BaseView
      title="Questões"
      navigationShowBackButton={false}
      navigationRightItem={<CloseButton onPress={onPressCloseButton} />}>
      <QuestionFlatList
        questions={questionList}
        onSelect={onSelectQuestionWithIndex}
      />
    </BaseView>
  );
}
