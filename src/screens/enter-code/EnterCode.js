import React, { useEffect, useState } from 'react';
import { StatusBar, Keyboard } from 'react-native';
import { Heading3, ForwardButton } from '../../components';
import { EnterCodeView, CodeTextField, FooterView, Content } from './styles';

export default function EnterCode() {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

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

  return (
    <Content>
      <StatusBar barStyle="dark-content" />

      <EnterCodeView>
        <Heading3>Digite o código da avaliação:</Heading3>
        <CodeTextField autoFocus={true} />
      </EnterCodeView>

      <FooterView bottom={keyboardHeight}>
        <ForwardButton>Participar</ForwardButton>
      </FooterView>
    </Content>
  );
}
