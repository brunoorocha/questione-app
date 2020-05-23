import React from 'react';
import {
  Content,
  SafeAreaView,
  NavigationBar,
  CloseButton,
  Uppercased,
} from '../../components';

export default function QuestionList({ navigation }) {
  const onPressCloseButton = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <NavigationBar
        showBackButton={false}
        rightItem={<CloseButton onPress={onPressCloseButton} />}
        title={<Uppercased>Questões</Uppercased>}
      />
      <Content />
    </SafeAreaView>
  );
}
