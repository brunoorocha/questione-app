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

export const MoreButton = ({ onPress }) => {
  return (
    <ButtonWrapper onPress={onPress} activeOpacity={0.7}>
      <Icon name="more-vert" size={20} color={colors.textColor} />
    </ButtonWrapper>
  );
};

export const CloseButton = ({ onPress }) => {
  return (
    <ButtonWrapper onPress={onPress} activeOpacity={0.7}>
      <Icon name="close" size={20} color={colors.textColor} />
    </ButtonWrapper>
  );
};
