import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import { colors } from '../colors/Colors';
import { SkelectonActitityIndicator } from '../activity-indicator/SkelectonActivityIndicator';
import { Heading1, Uppercased } from '../typography/Typography';

const NumberCardView = styled.View`
  border: 1px solid ${colors.lightGray};
  border-radius: 8px;
  padding: 16px;
  flex: 1;
`;

const NumberCardViewHeader = styled.View`
  flex: 1;
  height: 52px;
  align-items: flex-start;
`;

export const NumberCard = ({ number, label, isLoading }) => {
  return (
    <NumberCardView>
      <NumberCardViewHeader>
        {isLoading ? (
          <SkelectonActitityIndicator type="number" />
        ) : (
          <Heading1>{number}</Heading1>
        )}
      </NumberCardViewHeader>
      <Uppercased>{label}</Uppercased>
    </NumberCardView>
  );
};
