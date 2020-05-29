import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../colors/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

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

export const TextField = ({
  label,
  keyboardType,
  secureTextEntry,
  marginBottom,
  onChangeText,
}) => {
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

  const _onChangeText = (text) => {
    setValue(text);

    if (onChangeText) {
      onChangeText(text);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={didTapOnTextFieldView}>
      <TextFieldView isActive={isFocused} marginBottom={marginBottom}>
        <FieldLabel isActive={isActive}>{label ?? ''}</FieldLabel>
        <TextInput
          keyboardType={keyboardType ?? 'default'}
          secureTextEntry={secureTextEntry}
          onFocus={onFocus}
          onBlur={onBlur}
          onChangeText={_onChangeText}
          value={value}
          ref={(input) => {
            textInputRef = input;
          }}
        />
      </TextFieldView>
    </TouchableWithoutFeedback>
  );
};
