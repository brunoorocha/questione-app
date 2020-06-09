import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import {
  Heading3,
  ForwardButton,
  BaseView,
  FullscreenActivityIndicator,
} from '../../components';
import { EnterCodeView, CodeTextField, FooterView, Content } from './styles';
import { routesNames } from '../../routes/routesNames';

export default function EnterCode({
  navigation,
  isLoadingEvaluationQuestions,
  startEvaluation = () => {},
}) {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [evaluationCode, setEvaluationCode] = useState('');

  let textFieldRef;

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', keyboardDidShowHandler);
    Keyboard.addListener('keyboardWillHide', keyboardDidHideHandler);

    return () => {
      Keyboard.removeListener('keyboardWillShow', keyboardDidShowHandler);
      Keyboard.removeListener('keyboardWillHide', keyboardDidHideHandler);
    };
  });

  const keyboardDidShowHandler = (event) => {
    const keyboardHeightFromEvent = event.endCoordinates.height;
    setKeyboardHeight(keyboardHeightFromEvent);
  };

  const keyboardDidHideHandler = () => {
    setKeyboardHeight(0);
  };

  const onPressParticipate = () => {
    textFieldRef.blur();
    startEvaluation({ evaluationCode }).then(() => {
      navigation.push(routesNames.question);
    });
  };

  return (
    <BaseView title="Realizar Avaliação" navigation={navigation}>
      <Content>
        <EnterCodeView>
          <Heading3>Digite o código da avaliação:</Heading3>
          <CodeTextField
            autoFocus={true}
            ref={(input) => {
              textFieldRef = input;
            }}
            onChangeText={(text) => {
              setEvaluationCode(text);
            }}
          />
        </EnterCodeView>

        <FooterView bottom={keyboardHeight}>
          <ForwardButton
            isDisabled={evaluationCode.length === 0}
            onPress={onPressParticipate}>
            Participar
          </ForwardButton>
        </FooterView>
      </Content>

      <FullscreenActivityIndicator isVisible={isLoadingEvaluationQuestions} />
    </BaseView>
  );
}
