import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../colors/Colors';

const TextFieldView = styled.View`
  height: 48px;
  padding: 0px 16px;
  border: 1px solid
    ${(props) => (props.isActive ? colors.primaryColor : colors.lightGray)};
  font-size: 16px;
  font-family: 'Roboto-Regular';
  border-radius: 8px;
  margin-bottom: ${(props) =>
    props.marginBottom ? `${props.marginBottom}px` : '0px'};
`;

const FieldLabel = styled.Text`
  font-size: ${(props) => (props.isActive ? '12px' : '16px')};
  transform: translateY(${(props) => (props.isActive ? '-8px' : '12px')});
  font-family: 'Roboto-Regular';
  color: ${colors.darkGray};
  background-color: ${colors.white};
  padding: 0px 4px;
  align-self: flex-start;
`;

const TextInput = styled.TextInput`
  height: 48px;
  font-size: 16px;
  font-family: 'Roboto-Regular';
  color: ${colors.textColor};
  margin-top: -14px;
`;

export const TextField = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');
  let textInputRef;

  const onFocus = () => {
    setIsFocused(true);
    setIsActive(true);
  };

  const onBlur = () => {
    if (value === '') {
      setIsActive(false);
    }

    setIsFocused(false);
  };

  const didTapOnTextFieldView = () => {
    textInputRef.focus();
  };

  const onChangeText = (text) => {
    setValue(text);
  };

  return (
    <TouchableWithoutFeedback onPress={didTapOnTextFieldView}>
      <TextFieldView isActive={isFocused} {...props}>
        <FieldLabel isActive={isActive}>{props.label ?? ''}</FieldLabel>
        <TextInput
          keyboardType={props.keyboardType ?? 'default'}
          secureTextEntry={props.secureTextEntry}
          onFocus={onFocus}
          onBlur={onBlur}
          onChangeText={onChangeText}
          value={value}
          ref={(input) => {
            textInputRef = input;
          }}
        />
      </TextFieldView>
    </TouchableWithoutFeedback>
  );
};
