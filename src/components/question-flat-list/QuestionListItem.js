import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../colors/Colors';

Icon.loadFont();

const QuestionListItemWrapper = styled.View`
  padding: 16px;
  flex-direction: row;
  align-items: center;
`;

const QuestionTitle = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Bold';
  color: ${colors.textColor};
  text-transform: uppercase;
  flex: 1;
`;

const StateCheckmark = styled.View`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => props.color ?? colors.darkGray};
  background-color: ${(props) => props.color ?? 'transparent'};
  border-radius: 12px;
  margin-right: 16px;
`;

export const QuestionItemState = {
  notAnswered: 'notAnswered',
  answered: 'answered',
  right: 'right',
  wrong: 'wrong',
};

export const QuestionListItem = ({ title, state }) => {
  const _state = state ?? QuestionItemState.notAnswered;

  const _stateCheckmark = {
    notAnswered: {
      icon: null,
      color: null,
    },
    answered: {
      icon: <Icon name="check" size={18} color={colors.white} />,
      color: colors.primaryColor,
    },
    right: {
      icon: <Icon name="check" size={18} color={colors.white} />,
      color: colors.green,
    },
    wrong: {
      icon: <Icon name="close" size={18} color={colors.white} />,
      color: colors.red,
    },
  };

  return (
    <QuestionListItemWrapper>
      <StateCheckmark color={_stateCheckmark[_state].color}>
        {_stateCheckmark[_state].icon}
      </StateCheckmark>
      <QuestionTitle>{title}</QuestionTitle>
      <Icon name="keyboard-arrow-right" size={24} color={colors.textColor} />
    </QuestionListItemWrapper>
  );
};
