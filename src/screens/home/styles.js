import styled from 'styled-components/native';
import { colors } from '../../components';

export const ContentView = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const HeaderView = styled.View`
  background-color: ${colors.primaryColor};
  padding: 0px 16px 40px 16px;
  height: 240px;
  justify-content: flex-end;
`;

export const FooterView = styled.View`
  margin-top: 80px;
  padding: 0px 16px;
  height: 48px;
`;
