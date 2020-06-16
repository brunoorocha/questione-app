import React from 'react';
import styled from 'styled-components/native';
import { TouchableHighlight } from 'react-native';
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
  correct: 'correct',
  wrong: 'wrong',
};

export const QuestionListItem = ({
  title,
  isSelectable = true,
  state = QuestionItemState.notAnswered,
  onPress = () => {},
}) => {
  const _stateCheckmark = {
    notAnswered: {
      icon: null,
      color: null,
    },
    answered: {
      icon: <Icon name="check" size={18} color={colors.white} />,
      color: colors.primaryColor,
    },
    correct: {
      icon: <Icon name="check" size={18} color={colors.white} />,
      color: colors.green,
    },
    wrong: {
      icon: <Icon name="close" size={18} color={colors.white} />,
      color: colors.red,
    },
  };

  const underlayColor = isSelectable ? colors.lightGray : null;

  return (
    <TouchableHighlight onPress={onPress} underlayColor={underlayColor}>
      <QuestionListItemWrapper>
        <StateCheckmark color={_stateCheckmark[state].color}>
          {_stateCheckmark[state].icon}
        </StateCheckmark>
        <QuestionTitle>{title}</QuestionTitle>
        {isSelectable && (
          <Icon
            name="keyboard-arrow-right"
            size={24}
            color={colors.textColor}
          />
        )}
      </QuestionListItemWrapper>
    </TouchableHighlight>
  );
};
