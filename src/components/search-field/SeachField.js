import React, { useState } from 'react';
import styled from 'styled-components/native';
import { colors } from '../colors/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

const TextFieldView = styled.View`
  flex-direction: row;
  height: 48px;
  padding: 0px 16px;
  border: 1px solid
    ${(props) => (props.isActive ? colors.primaryColor : colors.lightGray)};
  font-size: 16px;
  font-family: 'Roboto-Regular';
  border-radius: 8px;
`;

const TextInput = styled.TextInput`
  height: 48px;
  font-size: 16px;
  font-family: 'Roboto-Regular';
  color: ${colors.textColor};
  flex: 1;
`;

const IconView = styled.View`
  height: 48px;
  margin-right: 16px;
  justify-content: center;
  align-items: center;
`;

export const SearchField = ({ placeholder, onTypeSearch }) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  return (
    <TextFieldView isActive={isFocused}>
      <IconView>
        <Icon name="search" size={20} color={colors.textColor} />
      </IconView>
      <TextInput
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={onTypeSearch}
        placeholder={placeholder}
        placeholderTextColor={colors.darkGray}
      />
    </TextFieldView>
  );
};
