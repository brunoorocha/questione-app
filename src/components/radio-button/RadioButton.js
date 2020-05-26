import React from 'react';
import styled from 'styled-components/native';
import { Paragraph } from '../typography/Typography';
import { colors } from '../colors/Colors';

const RadioButtonTouchableWrapper = styled.TouchableHighlight.attrs({
  underlayColor: colors.lightGray,
})`
  padding: 8px 8px 8px 0px;
  margin-bottom: 8px;
  border-radius: 8px;
`;

const RadioButtonWrapper = styled.View`
  flex-direction: row;
`;

const Radio = styled.View`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border: 2px solid
    ${(props) => (props.isChecked ? colors.primaryColor : colors.darkGray)};
  border-radius: 12px;
  margin-right: 16px;
`;

const RadioBullet = styled.View`
  width: 12px;
  height: 12px;
  background-color: ${colors.primaryColor};
  border-radius: 6px;
`;

export const RadioButton = ({ onPress, label, isSelected }) => {
  return (
    <RadioButtonTouchableWrapper onPress={onPress}>
      <RadioButtonWrapper>
        <Radio isChecked={isSelected}>{isSelected && <RadioBullet />}</Radio>
        <Paragraph>{label}</Paragraph>
      </RadioButtonWrapper>
    </RadioButtonTouchableWrapper>
  );
};
