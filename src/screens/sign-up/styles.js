import styled from 'styled-components/native';
import { colors } from '../../components';

export const View = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;

export const HeaderView = styled.View`
  padding-top: 40px;
`;

export const BackButtonArea = styled.View`
  height: 48px;
  flex-direction: row;
  align-items: center;
`;
