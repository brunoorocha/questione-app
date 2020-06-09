import React from 'react';
import { Chip } from './Chips';
import { colors } from '../colors/Colors';

export const IsFinishedChips = ({ isFinished }) => {
  return isFinished ? (
    <Chip title="Finalizada" color={colors.green} titleColor={colors.white} />
  ) : (
    <Chip title="Não finalizada" />
  );
};
