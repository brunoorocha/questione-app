import React, { useEffect, useState } from 'react';
import { StatusBar, Keyboard } from 'react-native';
import { Heading3, ForwardButton, colors } from '../../components';
import { EnterCodeView, CodeTextField, FooterView, Content } from './styles';
import { routesNames } from '../../routes';

export default function EnterCode({ navigation }) {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
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
    navigation.push(routesNames.question);
    textFieldRef.blur();
  };

  return (
    <Content>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <EnterCodeView>
        <Heading3>Digite o código da avaliação:</Heading3>
        <CodeTextField
          autoFocus={true}
          ref={(input) => {
            textFieldRef = input;
          }}
        />
      </EnterCodeView>

      <FooterView bottom={keyboardHeight}>
        <ForwardButton onPress={onPressParticipate}>Participar</ForwardButton>
      </FooterView>
    </Content>
  );
}
