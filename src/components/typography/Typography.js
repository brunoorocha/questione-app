import styled from 'styled-components/native';
import { colors } from '../colors/Colors';

export const Heading1 = styled.Text`
  font-size: 32px;
  font-family: 'Roboto-Black';
  color: ${colors.textColor};
  margin-bottom: 16px;
`;

export const Heading2 = styled.Text`
  font-size: 24px;
  font-family: 'Roboto-Bold';
  color: ${colors.textColor};
  margin-bottom: 16px;
`;

export const Paragraph = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Light';
  color: ${colors.textColor};
  line-height: 30px;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Light';
  color: ${colors.textColor};
  line-height: 24px;
  text-align: ${(props) => props.textAlign ?? 'left'};
`;
