import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const BackgroundView = styled.View`
  position: absolute;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
`;

export const ActivityIndicatorView = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
`;
