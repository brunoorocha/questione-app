import styled from 'styled-components/native';
import { colors } from '../colors/Colors';

export const SnackbarAreaView = styled.View`
  padding: 16px;
  position: absolute;
  bottom: 16px;
  width: 100%;
`;

export const SnackbarView = styled.View`
  flex: 1;
  background-color: ${colors.darkGray};
  padding: 16px;
  border-radius: 4px;
`;

export const SnackbarText = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Regular';
  color: ${colors.white};
  line-height: 24px;
`;
