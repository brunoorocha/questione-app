import React from 'react';
import styled from 'styled-components/native';
import { Heading4 } from '../typography/Typography';
import { colors } from '../colors/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

const ButtonWrapper = styled.TouchableOpacity`
  flex: 1;
  height: 48px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const QuestionListButton = (props) => {
  return (
    <ButtonWrapper onPress={props.onPress} activeOpacity={0.7}>
      <Heading4>{props.title}</Heading4>
      <Icon name="keyboard-arrow-down" size={16} color={colors.textColor} />
    </ButtonWrapper>
  );
};
