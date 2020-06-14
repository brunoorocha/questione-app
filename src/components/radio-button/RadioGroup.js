import React, { useState } from 'react';
import { View } from 'react-native';
import { RadioButton } from './RadioButton';

export const RadioGroup = ({ options, onChange }) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

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
