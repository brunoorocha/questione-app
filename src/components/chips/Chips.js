import React from 'react';
import styled from 'styled-components/native';
import { Uppercased } from '../typography/Typography';
import { colors } from '../colors/Colors';

const ChipView = styled.View`
  height: 20px;
  align-items: center;
  justify-content: center;
  padding: 0px 8px;
  border-radius: 10px;
  background-color: ${(props) => props.color ?? colors.lightGray};
  align-self: flex-start;
`;

export const Chip = ({ title, color, titleColor }) => {
  return (
    <ChipView color={color}>
      <Uppercased color={titleColor}>{title}</Uppercased>
    </ChipView>
  );
};
