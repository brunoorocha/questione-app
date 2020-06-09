import styled from 'styled-components/native';
import { colors } from '../colors/Colors';

export const TestCardView = styled.TouchableOpacity`
  padding: 16px;
  border: 1px solid ${colors.lightGray};
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const TestDescriptionText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  line-height: 24px;
  color: ${colors.textColor};
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const TestSmallText = styled.Text`
  flex: 1;
  font-family: 'Roboto-Regular';
  font-size: 12px;
  line-height: 18px;
  color: ${colors.textColor};
  text-align: ${(props) => (props.alignRight ? 'right' : 'left')};
`;

export const TestCardFooter = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const TestCardHeader = styled.View`
  flex: 1;
  flex-direction: row;
`;
