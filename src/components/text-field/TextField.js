import styled from 'styled-components/native';
import { colors } from '../colors/Colors';

export const TextField = styled.TextInput`
  height: 48px;
  padding: 0px 16px;
  border: 1px solid ${colors.lightGray};
  font-size: 16px;
  font-family: 'Roboto-Regular';
  border-radius: 8px;
  margin-bottom: ${(props) =>
    props.marginBottom ? `${props.marginBottom}px` : '0px'};
`;
