import React from 'react';
import { Content, BaseView, CloseButton } from '../../components';

export default function QuestionList({ navigation }) {
  const onPressCloseButton = () => {
    navigation.goBack();
  };

  return (
    <BaseView
      title="Questões"
      navigationShowBackButton={false}
      navigationRightItem={<CloseButton onPress={onPressCloseButton} />}>
      <Content />
    </BaseView>
  );
}
