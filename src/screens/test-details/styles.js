import styled from 'styled-components/native';
import { colors } from '../../components';

export const HeaderView = styled.View`
  padding: 40px 0px 0px 0px;
`;

export const ContentView = styled.View`
  flex: 1;
  padding: 0px 16px;
  background-color: ${colors.white};
`;

export const FooterView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 40px;
`;

export const ResultsView = styled.View`
  flex-direction: row;
`;
