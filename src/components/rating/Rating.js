import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../colors/Colors';

Icon.loadFont();

const RatingView = styled.View`
  flex-direction: row;
`;

export const Rating = () => {
  return (
    <RatingView>
      <Icon name="star" size={20} color={colors.mediumGray} />
      <Icon name="star" size={20} color={colors.mediumGray} />
      <Icon name="star" size={20} color={colors.mediumGray} />
      <Icon name="star" size={20} color={colors.mediumGray} />
      <Icon name="star" size={20} color={colors.mediumGray} />
    </RatingView>
  );
};
