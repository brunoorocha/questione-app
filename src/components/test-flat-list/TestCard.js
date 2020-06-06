import React from 'react';
import {
  TestCardView,
  TestDescriptionText,
  TestSmallText,
  TestCardFooter,
  TestCardHeader,
} from './styles';
import { HorizontalSpacer } from '../spacer/Spacer';
import { colors } from '../colors/Colors';
import { Chip } from '../chips/Chips';

export const TestCard = ({
  description,
  date,
  isFinished,
  resultsAvailable,
  teacherName,
  onPress,
}) => {
  return (
    <TestCardView activeOpacity={0.7} onPress={onPress}>
      <TestCardHeader>
        {isFinished ? (
          <Chip
            title="Finalizada"
            color={colors.green}
            titleColor={colors.white}
          />
        ) : (
          <Chip title="Não finalizada" />
        )}
        <HorizontalSpacer size={8} />
        {resultsAvailable && (
          <Chip
            title="Resultados disponíveis"
            color={colors.primaryColor}
            titleColor={colors.white}
          />
        )}
      </TestCardHeader>
      <TestDescriptionText>{description}</TestDescriptionText>

      <TestCardFooter>
        <TestSmallText>{teacherName}</TestSmallText>
        <TestSmallText alignRight>{date}</TestSmallText>
      </TestCardFooter>
    </TestCardView>
  );
};
