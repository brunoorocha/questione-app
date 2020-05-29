import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { colors } from '../../components';

export const ContentView = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const HeaderView = styled.View`
  background-color: ${colors.primaryColor};
  padding: ${Platform.OS === 'ios' ? '40px' : '8px'} 0px 40px 0px;
  height: 240px;
  justify-content: flex-end;
`;

export const MoreButtonView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const GreetingView = styled.View`
  padding: 0px 16px;
`;
