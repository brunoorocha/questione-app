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
import { IsFinishedChips } from '../chips/IsFinishedChips';

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
        <IsFinishedChips isFinished={isFinished} />
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
