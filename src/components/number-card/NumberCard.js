import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../colors/Colors';
import { Heading1, Uppercased } from '../typography/Typography';

const NumberCardView = styled.View`
  border: 1px solid ${colors.lightGray};
  border-radius: 8px;
  padding: 16px;
  flex: 1;
`;

export const NumberCard = ({ number, label }) => {
  return (
    <NumberCardView>
      <Heading1>{number}</Heading1>
      <Uppercased>{label}</Uppercased>
    </NumberCardView>
  );
};
