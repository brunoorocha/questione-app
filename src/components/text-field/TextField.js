import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  FieldLabel,
  TextFieldView,
  TextInput,
  ErrorMessage,
  View,
} from './styles';

Icon.loadFont();

export const TextField = ({
  label = '',
  error,
  keyboardType = 'default',
  secureTextEntry = false,
  autoCapitalize,
  marginBottom,
  onChangeText,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');
  const hasError = !!error && error !== '';
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
    <View marginBottom={marginBottom}>
      <TouchableWithoutFeedback onPress={didTapOnTextFieldView}>
        <TextFieldView isActive={isFocused} hasError={hasError}>
          <FieldLabel isActive={isActive}>{label}</FieldLabel>
          <TextInput
            {...{
              keyboardType,
              secureTextEntry,
              onFocus,
              onBlur,
              value,
              autoCapitalize,
            }}
            onChangeText={_onChangeText}
            ref={(input) => {
              textInputRef = input;
            }}
          />
        </TextFieldView>
      </TouchableWithoutFeedback>
      {hasError && <ErrorMessage>{error}</ErrorMessage>}
    </View>
  );
};
