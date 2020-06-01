import styled from 'styled-components/native';
import { colors } from '../colors/Colors';

export const View = styled.View`
  margin-bottom: ${(props) =>
    props.marginBottom ? `${props.marginBottom}px` : '0px'};
`;

export const TextFieldView = styled.View`
  height: 48px;
  padding: 0px 16px;
  border: 1px solid
    ${(props) =>
      props.isActive
        ? colors.primaryColor
        : props.hasError
        ? colors.red
        : colors.lightGray};
  font-size: 16px;
  font-family: 'Roboto-Regular';
  border-radius: 8px;
`;

export const FieldLabel = styled.Text`
  font-size: ${(props) => (props.isActive ? '12px' : '16px')};
  transform: translateY(${(props) => (props.isActive ? '-8px' : '12px')});
  font-family: 'Roboto-Regular';
  color: ${colors.darkGray};
  background-color: ${colors.white};
  padding: 0px 4px;
  align-self: flex-start;
`;

export const TextInput = styled.TextInput`
  height: 48px;
  font-size: 16px;
  font-family: 'Roboto-Regular';
  color: ${colors.textColor};
  margin-top: -14px;
`;

export const ErrorMessage = styled.Text`
  font-size: 12px;
  font-family: 'Roboto-Regular';
  color: ${colors.red};
  margin-top: 8px;
`;
