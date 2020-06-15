import React, { useState } from 'react';
import { View } from 'react-native';
import { RadioButton } from './RadioButton';

export const RadioGroup = ({ options, onChange, selectedOption }) => {
  // eslint-disable-next-line prettier/prettier
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(selectedOption);

  const _onChange = (index) => {
    setSelectedOptionIndex(index);

    if (onChange) {
      onChange(index);
    }
  };

  return (
    <View>
      {options &&
        options.map((option, key) => (
          <RadioButton
            key={`${key}`}
            label={option}
            isSelected={key === selectedOptionIndex}
            onPress={() => {
              _onChange(key);
            }}
          />
        ))}
    </View>
  );
};
