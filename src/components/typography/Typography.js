import styled from 'styled-components/native';
import { colors } from '../colors/Colors';

export const Heading1 = styled.Text`
  font-size: 32px;
  font-family: 'Roboto-Black';
  color: ${(props) => props.color ?? colors.textColor};
  margin-bottom: 16px;
`;

export const Heading2 = styled.Text`
  font-size: 24px;
  line-height: 36px;
  font-family: 'Roboto-Bold';
  color: ${(props) => props.color ?? colors.textColor};
  margin-bottom: 16px;
`;

export const Heading3 = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Light';
  color: ${(props) => props.color ?? colors.textColor};
  line-height: 30px;
  margin-bottom: 8px;
`;

export const Heading4 = styled.Text`
  font-size: 12px;
  font-family: 'Roboto-Bold';
  color: ${(props) => props.color ?? colors.textColor};
  line-height: 18px;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const Uppercased = styled.Text`
  font-size: 12px;
  font-family: 'Roboto-Bold';
  color: ${(props) => props.color ?? colors.textColor};
  text-transform: uppercase;
`;

export const Paragraph = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Light';
  color: ${(props) => props.color ?? colors.textColor};
  line-height: 24px;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Light';
  color: ${(props) => props.color ?? colors.textColor};
  line-height: 24px;
  text-align: ${(props) => props.textAlign ?? 'left'};
`;
