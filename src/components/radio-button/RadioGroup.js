import React, { useState } from 'react';
import { View } from 'react-native';
import { RadioButton } from './RadioButton';

export const RadioGroup = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const _onChange = (option) => {
    setSelectedOption(option);

    if (onChange) {
      onChange(option);
    }
  };

  return (
    <View>
      {options &&
        options.map((option, key) => (
          <RadioButton
            key={key}
            label={option}
            isSelected={option === selectedOption}
            onPress={() => {
              _onChange(option);
            }}
          />
        ))}
    </View>
  );
};
