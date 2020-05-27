import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../colors/Colors';
import { Chip } from '../chips/Chips';

const TestCardView = styled.TouchableOpacity`
  padding: 16px;
  border: 1px solid ${colors.lightGray};
  border-radius: 8px;
  margin-bottom: 16px;
`;

const TestDescriptionText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  line-height: 24px;
  color: ${colors.textColor};
  margin-top: 16px;
  margin-bottom: 8px;
`;

const TestDateText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  line-height: 18px;
  color: ${colors.textColor};
`;

export const TestCard = ({ description, date, isFinished, onPress }) => {
  return (
    <TestCardView activeOpacity={0.7} onPress={onPress}>
      {isFinished ? (
        <Chip
          title="Finalizada"
          color={colors.green}
          titleColor={colors.white}
        />
      ) : (
        <Chip title="Não finalizada" />
      )}
      <TestDescriptionText>{description}</TestDescriptionText>
      <TestDateText>{date}</TestDateText>
    </TestCardView>
  );
};
