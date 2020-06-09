import React from 'react';
import { ActivityIndicator as ActivityIndicatorComponent } from 'react-native';
import { ActivityIndicatorView } from './styles';
import { colors } from '../colors/Colors';

export const ActivityIndicator = ({ isVisible, alignCenter }) => {
  return isVisible ? (
    <ActivityIndicatorView alignCenter={alignCenter}>
      <ActivityIndicatorComponent color={colors.primaryColor} />
    </ActivityIndicatorView>
  ) : null;
};
