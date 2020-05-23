import React from 'react';
import styled from 'styled-components/native';
import { BackButton } from '../back-button/BackButton';
import { colors } from '../colors/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

const NavigationBarView = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white};
  height: 48px;
  border: 1px solid transparent;
  border-bottom-color: ${colors.lightGray};
`;

const CenterItem = styled.View`
  flex: 1;
  height: 48px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonItem = styled.View`
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
`;

export const NavigationBar = (props) => {
  const showBackButton =
    props.showBackButton !== undefined ? props.showBackButton : true;

  const onPressBackButton = () => {
    props.navigation.goBack();
  };

  return (
    <NavigationBarView>
      <ButtonItem>
        {showBackButton && <BackButton onPress={onPressBackButton} />}
      </ButtonItem>
      <CenterItem>{props.title}</CenterItem>
      <ButtonItem>{props.rightItem}</ButtonItem>
    </NavigationBarView>
  );
};
