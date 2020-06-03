import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../colors/Colors';

Icon.loadFont();

export const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Icon name="arrow-back" color={colors.primaryColor} size={20} />
    </TouchableOpacity>
  );
};
