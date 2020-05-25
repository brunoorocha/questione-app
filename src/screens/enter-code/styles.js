import styled from 'styled-components/native';
import { colors } from '../../components';

export const Content = styled.View`
  flex: 1;
  background-color: ${colors.white};
  padding: 0px 16px;
`;

export const EnterCodeView = styled.View`
  padding: 40px 0px;
`;

export const CodeTextField = styled.TextInput`
  font-size: 32px;
  font-family: 'Roboto-Bold';
  color: ${colors.textColor};
`;

export const FooterView = styled.View`
  width: 100%;
  position: absolute;
  bottom: ${(props) => (props.bottom ? `${props.bottom}px` : '40px')};
  left: 16px;
`;
