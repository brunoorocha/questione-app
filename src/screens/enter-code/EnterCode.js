import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { Heading3, ForwardButton, BaseView } from '../../components';
import { EnterCodeView, CodeTextField, FooterView, Content } from './styles';
import { routesNames } from '../../routes/routesNames';

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
    <BaseView title="Realizar Avaliação" navigation={navigation}>
      <Content>
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
    </BaseView>
  );
}
