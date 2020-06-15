import React, { useState } from 'react';
import {
  BaseView,
  MoreButton,
  QuestionListButton,
  ActionSheet,
  ActionSheetItem,
  colors,
} from '../../components';
import { View } from './styles';
import { QuestionFlatList } from './QuestionFlatList';
import { routesNames } from '../../routes/routesNames';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

export default function Question({ navigation, questions }) {
  const [isActionSheetOpen, setIsActionSheetOpen] = useState(false);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const numberOfQuestions = questions.length ?? 0;
  const navigationTitle = `Questão ${currentQuestionNumber} de ${numberOfQuestions}`;

  const onPressAboutQuestionButton = (question) => {
    navigation.push(routesNames.questionDetails);
  };

  const onPressQuestionListButton = () => {
    navigation.push(routesNames.questionList);
  };

  const onPressMoreButton = () => {
    setIsActionSheetOpen(true);
  };

  const onPressActionSheetCancelButton = () => {
    setIsActionSheetOpen(false);
  };

  const onChangeCurrentQuestion = (questionIndex) => {
    setCurrentQuestionNumber(questionIndex + 1);
  };

  return (
    <View>
      <BaseView
        title={
          <QuestionListButton
            title={navigationTitle}
            onPress={onPressQuestionListButton}
          />
        }
        navigationShowBackButton={false}
        navigationRightItem={<MoreButton onPress={onPressMoreButton} />}>
        <QuestionFlatList
          questions={questions}
          onChangeCurrentQuestion={onChangeCurrentQuestion}
        />
      </BaseView>

      <ActionSheet
        isOpen={isActionSheetOpen}
        onPressCancel={onPressActionSheetCancelButton}>
        <ActionSheetItem
          title="Sair da prova"
          type="destructive"
          onPress={() => {}}
          icon={<Icon name="exit-to-app" size={20} color={colors.red} />}
        />
        <ActionSheetItem
          title="Reportar erro"
          onPress={() => {}}
          icon={<Icon name="warning" size={20} color={colors.textColor} />}
        />
      </ActionSheet>
    </View>
  );
}
