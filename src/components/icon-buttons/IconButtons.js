import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../colors/Colors';

Icon.loadFont();

const ButtonWrapper = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
`;

export const MoreButton = (props) => {
  return (
    <ButtonWrapper onPress={props.onPress} activeOpacity={0.7}>
      <Icon name="more-vert" size={20} color={colors.textColor} />
    </ButtonWrapper>
  );
};

export const CloseButton = (props) => {
  return (
    <ButtonWrapper onPress={props.onPress} activeOpacity={0.7}>
      <Icon name="close" size={20} color={colors.textColor} />
    </ButtonWrapper>
  );
};
